import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { Helmet } from "react-helmet";

import "../styles/galaxy.css";

import galaxy from "../assets/audio/galaxy.mp3";
import earthImg from "../assets/images/earth1.png";

export default function GalaxyAfricaScene() {
  const mountRef = useRef(null);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // ---------------- AUDIO ----------------
    const audioEl = document.createElement("audio");
    audioEl.src = galaxy;
    audioEl.loop = true;
    audioEl.autoplay = true;
    audioEl.muted = true; // 🔥 starts muted to allow autoplay
    audioEl.style.display = "none";
    container.appendChild(audioEl);
    audioEl.play().catch(() => {});
    audioRef.current = audioEl;

    // Auto fade-in for mobile / permissive browsers
    const fadeIn = () => {
      if (!audioRef.current) return;
      audioRef.current.muted = false;
      let vol = 0;
      const fade = setInterval(() => {
        vol += 0.01;
        if (vol >= 0.5) {
          vol = 0.5;
          clearInterval(fade);
        }
        audioRef.current.volume = vol;
      }, 50);
    };

    // Try fading in automatically after 1s
    setTimeout(() => {
      fadeIn();
    }, 1000);

    // ---------------- THREE.JS SCENE ----------------
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020311);

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 8000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const sun = new THREE.DirectionalLight(0xffffff, 3);
    sun.position.set(300, 200, 200);
    scene.add(sun);

    let frameId;

    const loader = new THREE.TextureLoader();
    loader.load(earthImg, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;

      const earth = new THREE.Mesh(
        new THREE.SphereGeometry(6, 128, 128),
        new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.7,
          metalness: 0.2,
        })
      );
      earth.rotation.z = THREE.MathUtils.degToRad(23.5);
      scene.add(earth);

      const africaGlow = new THREE.PointLight(0xffd700, 3, 40);
      africaGlow.position.set(2, 2, 5);
      scene.add(africaGlow);

      const starGeo = new THREE.BufferGeometry();
      const starCount = 14000;
      const starPos = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        starPos[i * 3] = (Math.random() - 0.5) * 7000;
        starPos[i * 3 + 1] = (Math.random() - 0.5) * 7000;
        starPos[i * 3 + 2] = (Math.random() - 0.5) * 7000;
      }
      starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));

      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.2,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.8,
      });

      const stars = new THREE.Points(starGeo, starsMaterial);
      scene.add(stars);

      const startDist = 1800 + Math.random() * 1500;
      const startPos = new THREE.Vector3(
        Math.random() * startDist,
        Math.random() * startDist * 0.4,
        startDist
      );
      camera.position.copy(startPos);

      const curve = new THREE.CatmullRomCurve3([
        startPos,
        startPos.clone().multiplyScalar(0.6),
        startPos.clone().multiplyScalar(0.3),
        new THREE.Vector3(0, 0, 18),
      ]);

      let progress = 0;
      const clock = new THREE.Clock();

      function animate() {
        frameId = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        const t = clock.getElapsedTime();

        earth.rotation.y += delta * 0.2;
        starsMaterial.opacity = 0.6 + Math.sin(t * 0.8) * 0.3;

        if (progress < 1) {
          progress += delta * 0.1;
          camera.position.copy(curve.getPoint(progress));
        } else {
          const r = 20;
          camera.position.x = Math.cos(t * 0.2 + Math.sin(t * 0.1)) * r;
          camera.position.z = Math.sin(t * 0.2 + Math.cos(t * 0.1)) * r;
          camera.position.y = Math.sin(t * 0.3) * 4 + Math.sin(t * 0.1) * 2;
        }

        camera.lookAt(earth.position);
        renderer.render(scene, camera);
      }

      animate();
    });

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
        if (obj.material && obj.material.map) obj.material.map.dispose();
      });
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  // ---------------- UNMUTE & FADE ON FIRST CLICK ----------------
  const handleClick = () => {
    navigate("/gallery");

    if (audioRef.current && audioRef.current.muted) {
      let vol = 0;
      audioRef.current.muted = false;
      const fade = setInterval(() => {
        vol += 0.01;
        if (vol >= 0.5) {
          vol = 0.5;
          clearInterval(fade);
        }
        audioRef.current.volume = vol;
      }, 50);
    }
};

return (
  <>
   <Helmet>
  <title>Light Up Africa — A Vision for a Powered Continent</title>
  <meta
    name="description"
    content="Light Up Africa is a movement dedicated to awareness, innovation, and hope for reliable electricity across the African continent."
  />
  <meta
    name="keywords"
    content="Africa electricity, energy access, Light Up Africa, African development, renewable energy Africa"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://light-up-africa.com/" />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Light Up Africa",
        "url": "https://light-up-africa.com",
        "description": "A cinematic digital movement dedicated to raising awareness and accelerating electrification across Africa.",
        "publisher": {
          "@type": "Organization",
          "name": "Light Up Africa"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://light-up-africa.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    `}
  </script>
  <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://light-up-africa.com/"
        }
      ]
    }
  `}
</script>
  <link rel="canonical" href="https://light-up-africa.com/" />



   {/* OpenGraph (Facebook, WhatsApp, LinkedIn, Slack, Discord, iMessage, etc.) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Light Up Africa — A Continental Movement for Universal Electricity" />
  <meta property="og:description" content="A cinematic call to action for Africa’s electrification. Join the movement bringing light, hope, and opportunity to every community." />
  <meta property="og:url" content="https://light-up-africa.com/" />
  <meta property="og:image" content="https://light-up-africa.com/og-home.jpg" />

  {/* Twitter (X) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Light Up Africa — A Continental Movement for Universal Electricity" />
  <meta name="twitter:description" content="A cinematic call to action for Africa’s electrification. Join the movement bringing light, hope, and opportunity to every community." />
  <meta name="twitter:image" content="https://light-up-africa.com/og-home.jpg" />
</Helmet>


   
    <div className="landing-root" onClick={handleClick}>
      <div ref={mountRef} className="three-canvas" />
      <div className="landing-content">
        <div className="landing-cta">light-up-africa ✨</div>
        <p className="landing-sub">Constant electricity across the continent</p>
      </div>
    </div>
  </>
);

}