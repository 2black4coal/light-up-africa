import React from "react";
import "../styles/sec7fresh.css";

import s1 from "../assets/images/sec7/s1.jpg";
import s2 from "../assets/images/sec7/s2.jpg";
import s3 from "../assets/images/sec7/s3.jpg";
import s4 from "../assets/images/sec7/s4.jpg";
import s5 from "../assets/images/sec7/s5.jpg";
import s6 from "../assets/images/sec7/s6.jpg";

export default function Sec7() {
  const images = [s1, s2, s3, s4, s5, s6];

  return (
    <section className="sec7fresh-wrapper">
      <h2 className="sec7fresh-heading">Electricity Usage & National Impact</h2>

      <div className="sec7fresh-container">

        {/* LEFT — TEXT */}
        <div className="sec7fresh-text">
          <p>
            <strong>Electricity Usage & Impact:</strong> Power is the engine of life —
            it keeps hospitals running, industries producing, cities moving,
            and nations competitive.
          </p>

          <p>🏥 <strong>Hospitals & Healthcare</strong><br/>
          Uninterrupted power keeps surgeries safe and lives protected.</p>

          <p>🏭 <strong>Manufacturing & Industry</strong><br/>
          Stable power drives automation and production lines.</p>

          <p>🎓 <strong>Education & Research</strong><br/>
          Power fuels labs and innovation.</p>

          <p>🌾 <strong>Agriculture & Food Systems</strong><br/>
          Electricity powers irrigation and storage.</p>

          <p>🏙️ <strong>Cities & Digital Economy</strong><br/>
          Power keeps lights on and data centers running.</p>

          <p>🚆✈️🚗 <strong>Transportation & Mobility</strong><br/>
          Electricity drives trains and EV charging.</p>

          <p>
            <strong>Message to Leadership:</strong> Power is not politics —
            it is oxygen for growth.
          </p>
          <p>Reliable electricity is the base of every school, hospital, factory, farm, and digital system.</p>
<p>Power is not a luxury — it is the backbone of growth, stability, and national independence.</p>

        </div>

        {/* RIGHT — IMAGE GRID */}
        <div className="sec7fresh-images">
          {images.map((img, i) => (
            <div
              key={i}
              className="sec7fresh-image"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
