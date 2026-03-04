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

    // SCENE
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000010);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 20000);
    camera.position.set(0, 0, 5000);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // LIGHTS
    scene.add(new THREE.AmbientLight(0xffffff, 2.5));
    const sun = new THREE.PointLight(0xffffff, 5, 12000);
    sun.position.set(2000, 1500, 2000);
    scene.add(sun);

    // STARFIELDS
    const createStarLayer = (count, spread, size, color, opacity) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < pos.length; i++) pos[i] = (Math.random() - 0.5) * spread;
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ size, color, opacity, transparent: true });
      return new THREE.Points(geo, mat);
    };

    const starsNear = createStarLayer(9000, 9000, 2, 0xffffff, 0.85);
    const starsMid = createStarLayer(14000, 15000, 3, 0x88bbff, 0.9);
    const starsFar = createStarLayer(22000, 22000, 4, 0x4466ff, 0.7);
    scene.add(starsNear, starsMid, starsFar);

    // SHOOTING / DROPPING STARS
    const shootingStars = [];
    for (let i = 0; i < 90; i++) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(3), 3));
      const mat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 4,
        transparent: true,
        opacity: 0,
      });
      const star = new THREE.Points(geo, mat);
      star.userData = {
        speed: Math.random() * 1.4 + 0.5,
        life: 0,
      };
      shootingStars.push(star);
      scene.add(star);
    }

    // FLY-IN PATH
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

    // MEDIUM ELLIPTICAL ORBIT (height variation)
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

    // CLOSE-APPROACH CURVED PATH (camera spirals in and out)
    const createCloseApproachCurve = (currentCamPos) => {
      const mid1 = currentCamPos
        .clone()
        .add(new THREE.Vector3(0, 80, -150));
      const mid2 = new THREE.Vector3(0, 60, 220);
      const close = new THREE.Vector3(0, 40, 160); // close to Earth
      return new THREE.CatmullRomCurve3(
        [currentCamPos.clone(), mid1, mid2, close],
        false
      );
    };

    const createReturnFromCloseCurve = (closePos, orbitPos) => {
      const mid1 = closePos.clone().add(new THREE.Vector3(0, 80, -150));
      const mid2 = orbitPos.clone().add(new THREE.Vector3(0, 60, -80));
      return new THREE.CatmullRomCurve3(
        [closePos.clone(), mid1, mid2, orbitPos.clone()],
        false
      );
    };

    // PHASES
    const clock = new THREE.Clock();
    const FLY_IN_DURATION = 12000;
    const ORBIT_DURATION = 60000;
    const EARTH_ROTATION_SPEED = 0.0006;

    let phase = "flyIn"; // flyIn | orbit
    let orbitStartTime = null;

    // ESCAPE SYSTEM (Earth)
    let nextEscapeTime = null;
    let inEscape = false;
    let escapeStartTime = 0;
    let escapeDuration = 4000;
    let escapeStartEarthPos = new THREE.Vector3();
    let escapeTargetEarthPos = new THREE.Vector3();
    let escapeReturn = false;

    const setNextEscapeTime = (baseMs) => {
      nextEscapeTime = baseMs + THREE.MathUtils.randInt(20000, 40000);
    };

    // CAMERA CLOSE-APPROACH SYSTEM
    let nextCloseTime = null;
    let inClose = false;
    let closeStartTime = 0;
    let closeDuration = 5000;
    let closeCurveIn = null;
    let closeCurveOut = null;
    let closePhase = "in"; // in | hold | out
    let closeHoldStart = 0;
    const CLOSE_HOLD_TIME = 2500;

    const setNextCloseTime = (baseMs) => {
      nextCloseTime = baseMs + THREE.MathUtils.randInt(15000, 30000);
    };

    // LOAD TEXTURE FIRST
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
        setNextEscapeTime(0);
        setNextCloseTime(0);

        function animate() {
          requestAnimationFrame(animate);
          const elapsedMs = clock.getElapsedTime() * 1000;
          const delta = clock.getDelta();

          // EARTH ROTATION
          earth.rotation.y += EARTH_ROTATION_SPEED;
          atmosphere.rotation.y += EARTH_ROTATION_SPEED;

          // STAR DRIFT
          starsNear.rotation.y += 0.00012;
          starsMid.rotation.y += 0.00008;
          starsFar.rotation.y += 0.00004;

          // SHOOTING / DROPPING STARS
          shootingStars.forEach((star) => {
            if (star.material.opacity <= 0 && Math.random() < 0.003) {
              star.material.opacity = 1;
              star.userData.life = 1;
              star.position.set(
                Math.random() * 9000 - 4500,
                Math.random() * 7000 - 3500,
                Math.random() * -9000
              );
            }
            if (star.material.opacity > 0) {
              star.position.x += star.userData.speed * 90;
              star.position.y -= star.userData.speed * 45;
              star.userData.life -= 0.03;
              star.material.opacity = Math.max(0, star.userData.life);
            }
          });

          // ESCAPE EVENT TRIGGER (Earth)
          if (!inEscape && elapsedMs > nextEscapeTime) {
            inEscape = true;
            escapeReturn = false;
            escapeStartTime = elapsedMs;
            escapeDuration = THREE.MathUtils.randInt(3000, 5000);
            escapeStartEarthPos.copy(earth.position);

            if (Math.random() < 0.1) {
              // Earth passes THROUGH camera
              const dirToCamera = camera.position
                .clone()
                .sub(earth.position)
                .normalize();
              const distance = THREE.MathUtils.randInt(800, 2000);
              escapeTargetEarthPos
                .copy(camera.position)
                .add(dirToCamera.multiplyScalar(-distance));
            } else {
              // Random 3D direction
              const dir = new THREE.Vector3(
                (Math.random() - 0.5) * 2,
                (Math.random() - 0.5) * 2,
                (Math.random() - 0.5) * 2
              ).normalize();
              const distance = THREE.MathUtils.randInt(800, 2000);
              escapeTargetEarthPos
                .copy(earth.position)
                .add(dir.multiplyScalar(distance));
            }
          }

          // CAMERA CLOSE-APPROACH TRIGGER
          if (!inClose && elapsedMs > nextCloseTime && phase === "orbit") {
            inClose = true;
            closePhase = "in";
            closeStartTime = elapsedMs;
            closeDuration = THREE.MathUtils.randInt(3000, 4500);

            const orbitT = Math.min(
              (elapsedMs - orbitStartTime) / ORBIT_DURATION,
              1
            );
            const orbitPos = orbitCurve.getPoint(orbitT);

            closeCurveIn = createCloseApproachCurve(orbitPos);
            closeHoldStart = 0;
          }

          // PHASE LOGIC
          if (phase === "flyIn") {
            const t = Math.min(elapsedMs / FLY_IN_DURATION, 1);
            const eased =
              t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            const pos = flyInCurve.getPoint(eased);
            camera.position.copy(pos);
            camera.lookAt(earth.position);

            if (t >= 1) {
              phase = "orbit";
              orbitStartTime = elapsedMs;
            }
          } else if (phase === "orbit") {
            const orbitT = Math.min(
              (elapsedMs - orbitStartTime) / ORBIT_DURATION,
              1
            );
            const orbitPos = orbitCurve.getPoint(orbitT);

            // CAMERA MOTION
            if (!inClose && !inEscape) {
              // follow orbit spline with acceleration
              const dir = orbitPos.clone().sub(camera.position);
              camera.position.add(dir.multiplyScalar(0.015 * delta * 60));
            }

            // CLOSE-APPROACH CAMERA MOTION (curved approach)
            if (inClose && closeCurveIn) {
              if (closePhase === "in") {
                const t = Math.min(
                  (elapsedMs - closeStartTime) / closeDuration,
                  1
                );
                const eased =
                  t < 0.5
                    ? 4 * t * t * t
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
                const pos = closeCurveIn.getPoint(eased);
                camera.position.copy(pos);
                camera.lookAt(earth.position);

                if (t >= 1) {
                  closePhase = "hold";
                  closeHoldStart = elapsedMs;
                }
              } else if (closePhase === "hold") {
                const holdT = (elapsedMs - closeHoldStart) / CLOSE_HOLD_TIME;
                camera.lookAt(earth.position);
                camera.position.applyAxisAngle(
                  new THREE.Vector3(0, 1, 0),
                  0.0008 * delta * 60
                );
                if (holdT >= 1) {
                  closePhase = "out";
                  const currentPos = camera.position.clone();
                  closeCurveOut = createReturnFromCloseCurve(
                    currentPos,
                    orbitPos
                  );
                  closeStartTime = elapsedMs;
                  closeDuration = THREE.MathUtils.randInt(2500, 4000);
                }
              } else if (closePhase === "out" && closeCurveOut) {
                const t = Math.min(
                  (elapsedMs - closeStartTime) / closeDuration,
                  1
                );
                const eased =
                  t < 0.5
                    ? 4 * t * t * t
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
                const pos = closeCurveOut.getPoint(eased);
                camera.position.copy(pos);
                camera.lookAt(earth.position);

                if (t >= 1) {
                  inClose = false;
                  closeCurveIn = null;
                  closeCurveOut = null;
                  setNextCloseTime(elapsedMs);
                }
              }
            }

            // ESCAPE ANIMATION (Earth + camera chase)
            if (inEscape) {
              const escapeT = Math.min(
                (elapsedMs - escapeStartTime) / escapeDuration,
                1
              );

              if (!escapeReturn) {
                earth.position.lerpVectors(
                  escapeStartEarthPos,
                  escapeTargetEarthPos,
                  escapeT
                );

                const chaseDir = earth.position
                  .clone()
                  .sub(camera.position);
                camera.position.add(
                  chaseDir.multiplyScalar(0.02 * delta * 60)
                );

                if (escapeT >= 1) {
                  escapeReturn = true;
                  escapeStartTime = elapsedMs;
                  escapeStartEarthPos.copy(earth.position);
                  escapeTargetEarthPos.set(0, 0, 0);
                  escapeDuration = THREE.MathUtils.randInt(3000, 5000);
                }
              } else {
                const returnT = Math.min(
                  (elapsedMs - escapeStartTime) / escapeDuration,
                  1
                );

                earth.position.lerpVectors(
                  escapeStartEarthPos,
                  escapeTargetEarthPos,
                  returnT
                );

                const returnDir = orbitPos.clone().sub(camera.position);
                camera.position.add(
                  returnDir.multiplyScalar(0.015 * delta * 60)
                );

                if (returnT >= 1) {
                  inEscape = false;
                  escapeReturn = false;
                  setNextEscapeTime(elapsedMs);
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
