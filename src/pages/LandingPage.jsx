import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import "../styles/landing.css";
import earthImg from "../assets/images/earth1.png";

export default function LandingPage() {
  const mountRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000010);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 20000);
    camera.position.set(0, 0, 5000);
    camera.userData.inDive = false;
    camera.userData.diveTarget = null;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 2.5));
    const sun = new THREE.PointLight(0xffffff, 5, 12000);
    sun.position.set(2000, 1500, 2000);
    scene.add(sun);

    const createStarLayer = (count, spread, size, color, baseOpacity) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const sparkle = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
        sparkle[i] = Math.random();
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("sparkle", new THREE.BufferAttribute(sparkle, 1));
      const mat = new THREE.PointsMaterial({
        size,
        color,
        opacity: baseOpacity,
        transparent: true,
      });
      const stars = new THREE.Points(geo, mat);
      stars.userData.sparkle = sparkle;
      stars.userData.baseOpacity = baseOpacity;
      return stars;
    };

    const starsNear = createStarLayer(9000, 9000, 2, 0xffffff, 0.9);
    const starsMid = createStarLayer(14000, 15000, 3, 0x88bbff, 0.85);
    const starsFar = createStarLayer(22000, 22000, 4, 0x4466ff, 0.7);
    scene.add(starsNear, starsMid, starsFar);

    const shootingStars = [];
    for (let i = 0; i < 100; i++) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(3), 3));
      const mat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 4,
        transparent: true,
        opacity: 0,
      });
      const star = new THREE.Points(geo, mat);
      star.userData = { speed: Math.random() * 1.4 + 0.6, life: 0 };
      shootingStars.push(star);
      scene.add(star);
    }

    const flyInCurve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 5000),
        new THREE.Vector3(300, -200, 3500),
        new THREE.Vector3(-400, 300, 2000),
        new THREE.Vector3(150, 100, 900),
        new THREE.Vector3(0, 50, 300),
      ],
      false
    );

    const orbitPoints = [];
    for (let i = 0; i < 32; i++) {
      const angle = (i / 32) * Math.PI * 2;
      const radius = 320 + Math.sin(i * 0.4) * 130;
      const height = Math.sin(i * 0.5) * 140;
      orbitPoints.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        )
      );
    }
    const orbitCurve = new THREE.CatmullRomCurve3(orbitPoints, false);

    const createCloseCurve = (camPos) => {
      const mid1 = camPos.clone().add(new THREE.Vector3(0, 80, -150));
      const mid2 = new THREE.Vector3(0, 40, 140);
      const close = new THREE.Vector3(0, 20, 120);
      return new THREE.CatmullRomCurve3(
        [camPos.clone(), mid1, mid2, close],
        false
      );
    };

    const createReturnCurve = (closePos, orbitPos) => {
      const mid1 = closePos.clone().add(new THREE.Vector3(0, 80, -150));
      const mid2 = orbitPos.clone().add(new THREE.Vector3(0, 60, -80));
      return new THREE.CatmullRomCurve3(
        [closePos.clone(), mid1, mid2, orbitPos.clone()],
        false
      );
    };

    const clock = new THREE.Clock();
    const FLY_IN_DURATION = 12000;
    const ORBIT_DURATION = 60000;
    const EARTH_ROTATION_SPEED = 0.0006;

    let phase = "flyIn";
    let orbitStartTime = null;

    let nextEscapeTime = null;
    let inEscape = false;
    let escapeStart = 0;
    let escapeDuration = 4000;
    let escapeStartPos = new THREE.Vector3();
    let escapeTargetPos = new THREE.Vector3();
    let escapeReturn = false;

    const setNextEscape = (t) => {
      nextEscapeTime = t + THREE.MathUtils.randInt(20000, 40000);
    };

    let nextCloseTime = null;
    let inClose = false;
    let closeStart = 0;
    let closeDuration = 5000;
    let closeCurveIn = null;
    let closeCurveOut = null;
    let closePhase = "in";
    let closeHoldStart = 0;
    const CLOSE_HOLD_TIME = 2500;

    const setNextClose = (t) => {
      nextCloseTime = t + THREE.MathUtils.randInt(15000, 30000);
    };

    const loader = new THREE.TextureLoader();
    loader.load(
      earthImg,
      (texture) => {
        const earthMaterial = new THREE.MeshPhongMaterial({
          map: texture,
          shininess: 20,
          specular: 0x444444,
          emissive: 0x000000,
        });

        const earth = new THREE.Mesh(
          new THREE.SphereGeometry(50, 128, 128),
          earthMaterial
        );
        earth.position.set(0, 0, 0);
        scene.add(earth);

        const atmosphere = new THREE.Mesh(
          new THREE.SphereGeometry(52, 64, 64),
          new THREE.MeshPhongMaterial({
            color: 0x66ccff,
            transparent: true,
            opacity: 0.05,
            side: THREE.FrontSide,
            blending: THREE.AdditiveBlending,
          })
        );
        earth.add(atmosphere);

        clock.start();
        setNextEscape(0);
        setNextClose(0);

        function animate() {
          requestAnimationFrame(animate);
          const elapsed = clock.getElapsedTime() * 1000;
          const delta = clock.getDelta();

          earth.rotation.y += EARTH_ROTATION_SPEED;
          atmosphere.rotation.y += EARTH_ROTATION_SPEED;

          [starsNear, starsMid, starsFar].forEach((layer) => {
            layer.rotation.y += 0.00005;
            const sparkle = layer.userData.sparkle;
            const baseOpacity = layer.userData.baseOpacity;
            for (let i = 0; i < sparkle.length; i++) {
              sparkle[i] += (Math.random() - 0.5) * 0.03;
              sparkle[i] = Math.max(0.3, Math.min(1, sparkle[i]));
            }
            layer.material.opacity =
              baseOpacity +
              Math.sin(elapsed * 0.001 + Math.random() * 2) * 0.12;
          });

          shootingStars.forEach((star) => {
            if (star.material.opacity <= 0 && Math.random() < 0.006) {
              star.material.opacity = 1;
              star.userData.life = 1;
              star.position.set(
                Math.random() * 9000 - 4500,
                Math.random() * 7000 - 3500,
                Math.random() * -9000
              );
            }
            if (star.material.opacity > 0) {
              star.position.x += star.userData.speed * 120;
              star.position.y -= star.userData.speed * 60;
              star.userData.life -= 0.025;
              star.material.opacity = Math.max(0, star.userData.life);
            }
          });

          if (!inEscape && elapsed > nextEscapeTime) {
            inEscape = true;
            escapeReturn = false;
            escapeStart = elapsed;
            escapeDuration = THREE.MathUtils.randInt(3000, 5000);
            escapeStartPos.copy(earth.position);

            const dir = new THREE.Vector3(
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2
            ).normalize();
            const dist = THREE.MathUtils.randInt(300, 800);
            escapeTargetPos.copy(earth.position).add(dir.multiplyScalar(dist));
          }

          if (!camera.userData.inDive && Math.random() < 0.0005) {
            const diveDir = earth.position.clone().sub(camera.position).normalize();
            const diveDistance = THREE.MathUtils.randInt(80, 140);
            camera.userData.diveTarget = earth.position
              .clone()
              .add(diveDir.multiplyScalar(-diveDistance));
            camera.userData.inDive = true;
          }

          if (camera.userData.inDive) {
            const diveDir = camera.userData.diveTarget
              .clone()
              .sub(camera.position);
            camera.position.add(diveDir.multiplyScalar(0.018 * delta * 60));
            camera.lookAt(earth.position);

            if (diveDir.length() < 5) {
              camera.userData.inDive = false;
            }
          }

          if (!inClose && elapsed > nextCloseTime && phase === "orbit") {
            inClose = true;
            closePhase = "in";
            closeStart = elapsed;
            closeDuration = THREE.MathUtils.randInt(3000, 4500);

            const orbitT = Math.min(
              (elapsed - orbitStartTime) / ORBIT_DURATION,
              1
            );
            const orbitPos = orbitCurve.getPoint(orbitT);

            closeCurveIn = createCloseCurve(orbitPos);
            closeHoldStart = 0;
          }

          if (phase === "flyIn") {
            const t = Math.min(elapsed / FLY_IN_DURATION, 1);
            const eased =
              t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            const pos = flyInCurve.getPoint(eased);
            camera.position.copy(pos);
            camera.lookAt(earth.position);

            if (t >= 1) {
              phase = "orbit";
              orbitStartTime = elapsed;
            }
          } else if (phase === "orbit") {
            const orbitT = Math.min(
              (elapsed - orbitStartTime) / ORBIT_DURATION,
              1
            );
            const orbitPos = orbitCurve.getPoint(orbitT);

            const orbitDir = orbitPos.clone().sub(camera.position);
            camera.position.add(orbitDir.multiplyScalar(0.012 * delta * 60));

            if (inClose && closeCurveIn) {
              if (closePhase === "in") {
                const t = Math.min(
                  (elapsed - closeStart) / closeDuration,
                  1
                );
                const eased = t * t * (3 - 2 * t);
                const pos = closeCurveIn.getPoint(eased);
                camera.position.copy(pos);
                camera.lookAt(earth.position);

                if (t >= 1) {
                  closePhase = "hold";
                  closeHoldStart = elapsed;
                }
              } else if (closePhase === "hold") {
                const holdT = (elapsed - closeHoldStart) / CLOSE_HOLD_TIME;
                camera.lookAt(earth.position);
                camera.position.applyAxisAngle(
                  new THREE.Vector3(0, 1, 0),
                  0.0012 * delta * 60
                );
                if (holdT >= 1) {
                  closePhase = "out";
                  const currentPos = camera.position.clone();
                  closeCurveOut = createReturnCurve(currentPos, orbitPos);
                  closeStart = elapsed;
                  closeDuration = THREE.MathUtils.randInt(2500, 4000);
                }
              } else if (closePhase === "out" && closeCurveOut) {
                const t = Math.min(
                  (elapsed - closeStart) / closeDuration,
                  1
                );
                const eased = t * t * (3 - 2 * t);
                const pos = closeCurveOut.getPoint(eased);
                camera.position.copy(pos);
                camera.lookAt(earth.position);

                if (t >= 1) {
                  inClose = false;
                  closeCurveIn = null;
                  closeCurveOut = null;
                  setNextClose(elapsed);
                }
              }
            }

            if (inEscape) {
              const t = Math.min(
                (elapsed - escapeStart) / escapeDuration,
                1
              );
              const eased = t * t * (3 - 2 * t);

              if (!escapeReturn) {
                earth.position.lerpVectors(
                  escapeStartPos,
                  escapeTargetPos,
                  eased
                );

                const chase = earth.position
                  .clone()
                  .sub(camera.position);
                camera.position.add(
                  chase.multiplyScalar(0.01 * delta * 60)
                );

                if (t >= 1) {
                  escapeReturn = true;
                  escapeStart = elapsed;
                  escapeStartPos.copy(earth.position);
                  escapeTargetPos.set(0, 0, 0);
                  escapeDuration = THREE.MathUtils.randInt(3000, 5000);
                }
              } else {
                earth.position.lerpVectors(
                  escapeStartPos,
                  escapeTargetPos,
                  eased
                );

                const returnDir = orbitPos.clone().sub(camera.position);
                camera.position.add(
                  returnDir.multiplyScalar(0.01 * delta * 60)
                );

                if (t >= 1) {
                  inEscape = false;
                  escapeReturn = false;
                  setNextEscape(elapsed);
                }
              }
            }

            camera.lookAt(earth.position);
          }

          renderer.render(scene, camera);
        }

        animate();
      }
    );

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="landing-root" onClick={() => navigate("/gallery")}>
      <div ref={mountRef} className="three-canvas" />
      <div className="landing-content">
        <h1 className="landing-title">Light Up Africa</h1>
        <p className="landing-sub">Constant electricity across the continent</p>
        <div className="landing-cta">Click anywhere to begin</div>
      </div>
    </div>
  );
}
