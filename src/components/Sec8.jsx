import React from "react";
import "../styles/sec8fresh.css";

import s1 from "../assets/images/sec8/oly.png";
import s2 from "../assets/images/sec8/rocket.png";

export default function Sec8() {
  return (
    <section className="sec8fresh-wrapper">
      <h2 className="sec8fresh-heading">Africa’s Future — Built Through Power</h2>

      <div className="sec8fresh-row">

        {/* CARD 1 */}
        <div className="sec8fresh-card">
          <div
            className="sec8fresh-image"
            style={{ backgroundImage: `url(${s1})` }}
          />
          <div className="sec8fresh-text">
            <h3>Olympics in the Desert</h3>
            <p>
              With power, transport, and engineering discipline,
              Africa can host the <strong>Olympic Games</strong>.
            </p>
            <p>
              Stable electricity means Africa does not ask permission —
              <strong> it hosts the world.</strong>
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="sec8fresh-card">
          <div
            className="sec8fresh-image"
            style={{ backgroundImage: `url(${s2})` }}
          />
          <div className="sec8fresh-text">
            <h3>Africa’s Rocket to Orbit</h3>
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
