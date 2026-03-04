import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import "../styles/galaxy.css";

import earthImg from "../assets/images/earth1.png";

export default function GalaxyAfricaScene() {
  const mountRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000010);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 3000);
    camera.position.set(0, 15, 60);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const sun = new THREE.PointLight(0xffffff, 3, 800);
    sun.position.set(60, 40, 20);
    scene.add(sun);

    // Earth
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(earthImg);
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(5, 128, 128),
      new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 15,
        specular: 0x444444,
        emissive: 0x021021,
      })
    );
    scene.add(earth);

    // Atmosphere (thin halo)
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(5.05, 64, 64),
      new THREE.MeshPhongMaterial({
        color: 0x66ccff,
        transparent: true,
        opacity: 0.2,
        side: THREE.FrontSide,
        shininess: 0,
        blending: THREE.AdditiveBlending,
      })
    );
    earth.add(atmosphere);

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starCount = 6000;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starPos.length; i++) starPos[i] = (Math.random() - 0.5) * 1500;
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starsMaterial = new THREE.PointsMaterial({ size: 1.2, color: 0xffffff, transparent: true });
    const stars = new THREE.Points(starGeo, starsMaterial);
    scene.add(stars);

    // Shooting stars (short flashes, no long lines)
    const shootingStars = [];
    const shootingCount = 30;
    for (let i = 0; i < shootingCount; i++) {
      const geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array(3);
      geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
      const material = new THREE.PointsMaterial({ color: 0xffffff, size: 2, transparent: true, opacity: 0 });
      const star = new THREE.Points(geometry, material);
      star.userData = { speed: Math.random() * 0.5 + 0.2 };
      scene.add(star);
      shootingStars.push(star);
    }

    // Camera fly-in + orbit
    let start = null;
    const duration = 10000;

    function ease(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate(time) {
      requestAnimationFrame(animate);
      if (!start) start = time;

      const t = Math.min((time - start) / duration, 1);
      const e = ease(t);

      earth.rotation.y += 0.0015;
      atmosphere.rotation.y += 0.0015;

      // Stars twinkle like satellites
      starsMaterial.opacity = 0.7 + Math.sin(time * 0.002) * 0.3;

      // Shooting stars appear and move quickly
      shootingStars.forEach((star) => {
        if (star.material.opacity <= 0 && Math.random() < 0.003) {
          star.material.opacity = 1;
          star.position.set(Math.random() * 1000 - 500, Math.random() * 800 - 400, Math.random() * -500);
        }
        if (star.material.opacity > 0) {
          star.position.x += star.userData.speed * 10;
          star.position.y -= star.userData.speed * 5;
          star.material.opacity -= 0.02;
        }
      });

      // Camera fly-in
      const startZ = 60;
      const endZ = 14;
      camera.position.z = startZ + (endZ - startZ) * e;
      camera.position.y = 15 - 12 * e;
      camera.position.x = Math.sin(time * 0.0002) * 40; // cinematic side motion
      camera.position.z += Math.cos(time * 0.0003) * 20;

      camera.lookAt(earth.position);
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
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