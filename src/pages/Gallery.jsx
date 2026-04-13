import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import Slide from "../components/Slide";
import "../styles/gallery.css";

// ⭐ Correct audio import
import galleryAudio from "../assets/audio/gallery.mp3";

import glow from "../assets/images/resized/glow.png";
import slide1 from "../assets/images/resized/slide1.jpg";
import slide2 from "../assets/images/resized/slide2.jpg";
import slide3 from "../assets/images/resized/slide3.jpg";
import slide4 from "../assets/images/resized/slide4.jpg";
import slide5 from "../assets/images/resized/slide5.jpg";
import slide6 from "../assets/images/resized/slide6.jpg";
import slide7 from "../assets/images/resized/slide7.jpg";
import slide8 from "../assets/images/resized/slide8.png";
import slide9 from "../assets/images/resized/slide9.png";
import nuclear from "../assets/images/resized/nuclear.png";

const slides = [
  { image: glow, text: "...it is time!" },
  { image: slide1, text: "Africa rises when every home has light." },
  { image: slide2, text: "A continent’s future begins with a single spark." },
  { image: nuclear, text: "When a nation controls its own energy, it controls its future." },
  { image: slide3, text: "Power is not a luxury — it is dignity." },
  { image: slide4, text: "Electricity turns potential into reality." },
  { image: slide5, text: "Light creates opportunity where darkness once lived." },
  { image: slide6, text: "When we power Africa, we empower Africans." },
  { image: slide7, text: "Every watt we build becomes a step toward freedom." },
  { image: slide8, text: "Bright homes create bright minds — and a brighter Africa." },
  { image: slide9, text: "When leaders and engineers speak together, the lights stay on forever." }
];

const SLIDE_DURATION = 9000;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // ---------------- AUDIO AUTOPLAY ----------------
    const audio = new Audio(galleryAudio);
    audio.loop = true;
    audio.volume = 0;
    audio.muted = true;

    audio.play().catch((e) => console.log("Autoplay blocked:", e));

    // Fade in after 1.5 seconds
    setTimeout(() => {
      audio.muted = false;
      let vol = 0;
      const fade = setInterval(() => {
        vol += 0.01;
        if (vol >= 0.5) {
          vol = 0.5;
          clearInterval(fade);
        }
        audio.volume = vol;
      }, 50);
    }, 1500);

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      <Helmet>
        <title>Gallery — Light Up Africa</title>
        <meta
          name="description"
          content="A cinematic slideshow capturing the vision, urgency, and hope behind electrifying Africa. Explore powerful imagery and messages that highlight the importance of reliable energy across the continent."
        />
        <meta
          name="keywords"
          content="Africa electricity gallery, Light Up Africa slideshow, African energy awareness, electrification visuals"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://light-up-africa.com/gallery" />

<script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gallery",
      "url": "https://light-up-africa.com/gallery",
      "description": "A visual gallery showcasing Light Up Africa’s cinematic scenes, inspirational imagery, and storytelling visuals that highlight the movement’s mission for universal electricity across Africa.",
      "about": {
        "@type": "Organization",
        "name": "Light Up Africa",
        "url": "https://light-up-africa.com"
      }
    }
  `}
</script>





         <link rel="canonical" href="https://light-up-africa.com/disclaimer" />
          {/* OpenGraph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Gallery — Light Up Africa" />
  <meta property="og:description" content="Explore a cinematic gallery of visuals that capture the mission, emotion, and energy behind Light Up Africa. A curated collection of scenes and imagery that tell our story." />
  <meta property="og:url" content="https://light-up-africa.com/gallery" />
  <meta property="og:image" content="https://light-up-africa.com/og-gallery.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Gallery — Light Up Africa" />
  <meta name="twitter:description" content="Explore a cinematic gallery of visuals that capture the mission, emotion, and energy behind Light Up Africa. A curated collection of scenes and imagery that tell our story." />
  <meta name="twitter:image" content="https://light-up-africa.com/og-gallery.jpg" />
      </Helmet>

      <div className="gallery-root" onClick={() => navigate("/task")}>
        <AnimatePresence mode="wait" initial={false}>
          <Slide key={index} slide={slides[index]} />
        </AnimatePresence>
      </div>
    </>
  );
}
