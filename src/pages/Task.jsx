import React from "react";
import { Link } from "react-router-dom";

import Sec1 from "../components/Sec1";
import Sec2 from "../components/Sec2";
import Sec3 from "../components/Sec3";
import Sec4 from "../components/Sec4";
import Sec5 from "../components/Sec5";
import Sec6 from "../components/Sec6";
import Sec7 from "../components/Sec7";
import Sec8 from "../components/Sec8";
import SecNuclear from "../components/SecNuclear";

import "../styles/section-divider.css";

export default function Task() {
  return (
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

      {/* TOP‑LEFT NAVIGATION — INLINE VERSION OF YOUR CSS */}
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
      <Sec1 />
      <div className="section-divider" />
      <Sec2 />
      <div className="section-divider" />
      <Sec4 />
      <div className="section-divider" />
      <Sec3 />
      <div className="section-divider" />
      <SecNuclear />
      <div className="section-divider" />
      <Sec5 />
      <div className="section-divider" />
      
      <Sec6 />
      <div className="section-divider" />
      <Sec7 />
      <div className="section-divider" />
      <Sec8 />



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
  );
}
