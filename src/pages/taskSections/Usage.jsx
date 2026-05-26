import React from "react";
import { Link } from "react-router-dom";
import "../../styles/usage.css";

import s1 from "../../assets/images/sec7/s1.jpg";
import s2 from "../../assets/images/sec7/s2.jpg";
import s3 from "../../assets/images/sec7/s3.jpg";
import s4 from "../../assets/images/sec7/s4.jpg";
import s5 from "../../assets/images/sec7/s5.jpg";
import s6 from "../../assets/images/sec7/s6.jpg";

export default function Usage() {
  const images = [s1, s2, s3, s4, s5, s6];

  return (
    <main className="usage-page">
      <h1 className="usage-title">Electricity Usage & National Impact</h1>

      <div className="usage-row">

        {/* LEFT — TEXT */}
        <div className="usage-text">
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
          Electricity drives trains, metros, airports, and EV charging.</p>

          <p>
            <strong>Message to Leadership:</strong> Power is not politics —
            it is oxygen for growth.
          </p>

          <p>
            Reliable electricity is the base of every school, hospital, factory,
            farm, and digital system. Power is not a luxury — it is the backbone
            of growth, stability, and national independence.
          </p>
        </div>

        {/* RIGHT — IMAGE GRID */}
        <div className="usage-images">
          {images.map((img, i) => (
            <div
              key={i}
              className="usage-image"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

      </div>

      <section className="usage-conclusion">
        <h2>Conclusion — Electricity Shapes Nations</h2>
        <p>
          Every sector of society depends on reliable electricity. From hospitals to
          manufacturing, from agriculture to digital systems, power is the foundation
          of national strength.
        </p>
        <p>
          Africa’s future depends on leaders who treat electricity as a strategic
          priority — not a political talking point. Build the power. Build the grid.
          Build the future.
        </p>
      </section>

      <footer className="usage-footer">
        Light Up Africa — A Continental Awakening
      </footer>

      <Link to="/task" className="usage-arrow">←</Link>
    </main>
  );
}
