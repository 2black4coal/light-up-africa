import React from "react";
import "../styles/d.css";

import s1 from "../assets/images/sec7/s1.jpg";
import s2 from "../assets/images/sec7/s2.jpg";
import s3 from "../assets/images/sec7/s3.jpg";
import s4 from "../assets/images/sec7/s4.jpg";
import s5 from "../assets/images/sec7/s5.jpg";
import s6 from "../assets/images/sec7/s6.jpg";

export default function Sec7() {
  const images = [s1, s2, s3, s4, s5, s6];

  return (
    <section className="impact-section">
      <div className="impact-container">

        {/* LEFT — TEXT */}
        <div className="impact-text">
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
        </div>

        {/* RIGHT — IMAGE GRID */}
        <div className="impact-images">
          {images.map((img, i) => (
            <div
              key={i}
              className="impact-image"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}