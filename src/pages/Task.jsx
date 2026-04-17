import React from "react";
import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";

import Sec1 from "../components/Sec1";
import Sec2 from "../components/Sec2";
import Sec3 from "../components/Sec3";
import Sec4 from "../components/Sec4";
import Sec5 from "../components/Sec5";
import Sec6 from "../components/Sec6";
import Sec7 from "../components/Sec7";
import Sec8 from "../components/Sec8";
import SecNuclear from "../components/SecNuclear";

import { Helmet } from "react-helmet";
import "../styles/section-divider.css";

export default function Task() {
  return (
    <>
      <Helmet>
        <title>Our Task — Light Up Africa</title>
        <meta
          name="description"
          content="Explore the mission, urgency, and responsibility behind powering Africa. This page outlines the truth, challenges, and actions needed to achieve universal electrification across the continent."
        />
        <meta
          name="keywords"
          content="Light Up Africa mission, Africa electrification, African energy crisis, renewable energy Africa, continental power infrastructure"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://light-up-africa.com/task" />
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Light Up Africa",
      "url": "https://light-up-africa.com",
      "logo": "https://light-up-africa.com/logo.png",
      "description": "Light Up Africa is a continental movement dedicated to raising awareness, accelerating electrification, and supporting sustainable energy development across Africa.",
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Frank Black. — Founder & Campaign Lead"
      },
      "sameAs": [
        "https://light-up-africa.com"
      ]
    })
  }}
/>

  <link rel="canonical" href="https://light-up-africa.com/task" />


  {/* OpenGraph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Our Task — Light Up Africa" />
  <meta property="og:description" content="Discover the mission, strategy, and continental vision behind Light Up Africa. This page outlines the core task driving our movement for universal electricity access." />
  <meta property="og:url" content="https://light-up-africa.com/task" />
  <meta property="og:image" content="https://light-up-africa.com/og-task.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Our Task — Light Up Africa" />
  <meta name="twitter:description" content="Discover the mission, strategy, and continental vision behind Light Up Africa. This page outlines the core task driving our movement for universal electricity access." />
  <meta name="twitter:image" content="https://light-up-africa.com/og-task.jpg" />
      </Helmet>

      <main
        style={{
          background: "#000",
          minHeight: "100vh",
          paddingTop: "40px",
          paddingBottom: "40px",
          color: "#fff",
          position: "relative"
        }}
      >
        {/* TOP SPACER */}
        <div style={{ height: "80px" }} />

        {/* PAGE TITLE */}
        <h1
          style={{
            textAlign: "center",
            margin: "0 0 40px 0",
            fontSize: "1.6rem",
            fontWeight: "600",
            color: "rgba(255,255,255,0.9)"
          }}
        >
          Our Task
        </h1>

        {/* TOP‑LEFT NAVIGATION */}
        <div
          style={{
            position: "fixed",
            top: "2rem",
            left: "2rem",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: "0.8rem"
          }}
        >
          {/* LEFT ARROW → GALLERY */}
          <Link
            to="/gallery"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "0.5rem 1rem",
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.9rem",
              borderRadius: "6px",
              cursor: "pointer",
              backdropFilter: "blur(6px)",
              transition: "0.3s ease",
              textDecoration: "none"
            }}
          >
            ←
          </Link>

          {/* RIGHT ARROW → LIGHTHOPE */}
          <Link
            to="/lighthope"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "0.5rem 1rem",
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.9rem",
              borderRadius: "6px",
              cursor: "pointer",
              backdropFilter: "blur(6px)",
              transition: "0.3s ease",
              textDecoration: "none"
            }}
          >
            →
          </Link>
        </div>

        {/* INTRO TRUTH BLOCK */}
        <div
          style={{
            maxWidth: "750px",
            margin: "0 auto 80px auto",
            textAlign: "center",
            color: "rgba(255,255,255,0.85)",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            fontWeight: "300",
            padding: "0 20px"
          }}
        >
          <p><strong>Over 900 million Africans still live without reliable electricity</strong> — the largest energy gap ever recorded in human history.</p>

          <p><strong>A continent of 1.55 billion people is forced to survive on generators, diesel and candles</strong> while the rest of the world moves forward with clean, constant power.</p>

          <p><strong>Children study under choking generator fumes</strong>. Families sleep in unbearable heat. Hospitals fight to save lives in darkness. Businesses collapse every time the lights go out.</p>

          <p><strong>For decades, our suffering has been prolonged by systems built to profit from our darkness</strong> — expensive fuel, endless generator imports, and a cycle that keeps millions struggling every single night.</p>

          <p><strong>The noise of generators has become the soundtrack of African survival</strong> — a horrifying, exhausting reminder that we are paying the highest price for the lowest quality of life.</p>

          <p><strong>Africa is not powerless — Africa has been unplugged.</strong> Not by nature. Not by destiny. But by design.</p>

          <p>
            A few grow rich selling fuel into darkness.
            A few profit from delay.
            A few fear a powered Africa.
            <strong>But billions suffer for it.</strong>
            And that injustice must end.
          </p>

          <p>
            Africa is not poor in rivers.
            Not poor in sun.
            Not poor in wind.
            Not poor in engineers.
            <strong>Africa has been unplugged by fear, delay, and small vision.</strong>
          </p>

          <p>
            We must fight for power lines across deserts.
            Fight for turbines on rivers.
            Fight for grids across villages.
            Fight for batteries in cities.
            Fight for satellites, factories, data centers, hospitals, schools —
            <strong>fight for light in every home.</strong>
          </p>

          <p>
            Leaders must choose courage over speeches.
            Banks must choose investment over excuses.
            Companies must choose sacrifice over short-term profit.
            Engineers must build.
            Citizens must demand.
            <strong>History moves when people decide enough is enough.</strong>
          </p>

          <p>
            This is not charity.
            This is infrastructure.
            This is sovereignty.
            This is survival.
            <strong>This is Africa’s right.</strong>
          </p>

          <p>
            <strong>And now, a new generation is rising</strong> — a generation ready to fight for light, demand change, and build the Africa our children deserve.
          </p>

          <p><strong>This is the awakening. This is the struggle. This is the movement.</strong></p>
        </div>

      {/* PAGE CONTENT */}
<div className="section-divider" />
<RevealSection><Sec1 /></RevealSection>
<div className="section-divider" />
<RevealSection><Sec2 /></RevealSection>
<div className="section-divider" />

<RevealSection><Sec4 /></RevealSection>
<div className="section-divider" />

<RevealSection><Sec3 /></RevealSection>
<div className="section-divider" />

<RevealSection><SecNuclear /></RevealSection>
<div className="section-divider" />

<RevealSection><Sec5 /></RevealSection>
<div className="section-divider" />

<RevealSection><Sec6 /></RevealSection>
<div className="section-divider" />

<RevealSection><Sec7 /></RevealSection>
<div className="section-divider" />

<RevealSection><Sec8 /></RevealSection>


        {/* BOTTOM SPACER */}
        <div style={{ height: "170px" }} />

        {/* WRAP‑UP SIGNATURE */}
        <div
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.85rem",
            lineHeight: "1.4",
            marginTop: "20px",
            paddingBottom: "20px"
          }}
        >
          <div>Light Up Africa — A Continental Awakening</div>
          <div>All rights reserved.</div>
          <div>For the people. By the people. With the people.</div>
        </div>
      </main>
    </>
  );
}
