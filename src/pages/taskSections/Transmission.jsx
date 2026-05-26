import React from "react";
import { Link } from "react-router-dom";
import "../../styles/transmission.css";

import l1 from "../../assets/images/sec6/l1.jpg";

export default function Transmission() {
  return (
    <main className="transmission-page">
      <h1 className="transmission-title">Transmission Lines — The Lifeblood of Electrification</h1>

      <div className="transmission-row">
        <div
          className="transmission-image"
          style={{ backgroundImage: `url(${l1})` }}
        />

        <div className="transmission-text">
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

      <section className="transmission-conclusion">
        <h2>Conclusion — Build the Lines, Build the Nation</h2>
        <p>
          Transmission lines are the arteries of national development. Without them, power plants
          cannot deliver electricity, industries cannot grow, and communities remain in darkness.
        </p>
        <p>
          Africa has the engineers, the workforce, and the land. What is needed now is the
          commitment to build transmission networks that connect every region and unlock
          continental prosperity.
        </p>
      </section>

      <footer className="transmission-footer">
         Light Up Africa — A Continental Awakening
      </footer>

      <Link to="/task" className="transmission-arrow">←</Link>
    </main>
  );
}
