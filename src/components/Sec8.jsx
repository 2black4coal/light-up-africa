import React from "react";
import "../styles/e.css";

import s1 from "../assets/images/sec8/oly.png";
import s2 from "../assets/images/sec8/rocket.png";

export default function Sec8() {
  return (
    <section className="vision-section">
      <div className="vision-row">

        <div
          className="vision-card"
          style={{ backgroundImage: `url(${s1})` }}
        >
          <div className="vision-text">
            <h2>Olympics in the Desert</h2>
            <p>
              With power, transport and engineering discipline,
              Africa can host the <strong>Olympic Games</strong>.
            </p>
            <p>
              Stable electricity means Africa does not ask permission —
              <strong> it hosts the world.</strong>
            </p>
          </div>
        </div>

        <div
          className="vision-card"
          style={{ backgroundImage: `url(${s2})` }}
        >
          <div className="vision-text">
            <h2>Africa’s Rocket to Orbit</h2>
            <p>
              Space launch requires <strong>precision power</strong>
              and advanced engineering.
            </p>
            <p>
              Electrified industry enables Africa to
              <strong> design and launch its own rockets</strong>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}