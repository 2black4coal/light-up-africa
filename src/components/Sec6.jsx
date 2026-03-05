import React from "react";
import "../styles/c.css"; // same CSS file

import l1 from "../assets/images/sec6/l1.jpg";

export default function Sec6() {
  return (
    <section className="split-section">
      <div className="split-row">

        {/* IMAGE COLUMN */}
        <div className="split-image">
          <img src={l1} alt="Transmission Lines" />
        </div>

        {/* TEXT COLUMN */}
        <div className="split-text">
          <p>
            <strong>Transmission Lines:</strong> These lines are the
            <strong> lifeblood of electrification</strong>, carrying power across
            cities, towns, villages, schools, hospitals, and industries.
          </p>

          <p>
            Transmission lines form the backbone of development. Every tower and conductor
            works together to move energy across mountains, forests, deserts, and rural
            communities.
          </p>

          <p>
            <strong>Construction Details:</strong> Every 100 km of high‑voltage line costs
            <strong> $25–30 million</strong> and takes <strong>2–3 years</strong> to
            complete, creating <strong>thousands of jobs</strong>.
          </p>

          <p>
            <strong>Grid Strength:</strong> Modern high‑voltage lines reduce power losses,
            stabilize national grids, and allow electricity to travel hundreds of
            kilometers without interruption.
          </p>

          <p>
            <strong>Impact on Africa:</strong> Reliable electricity powers
            <strong> education, healthcare, commerce, agriculture, and industry</strong>.
          </p>

          <p>
            <strong>Message to Leaders:</strong> Leadership is not speeches — it is
            building the lines, towers, and grids that keep a nation alive.
          </p>
        </div>

      </div>
    </section>
  );
}