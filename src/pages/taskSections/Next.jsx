import React from "react";
import { Link } from "react-router-dom";
import "../../styles/next.css";

import s1 from "../../assets/images/sec8/oly.png";
import s2 from "../../assets/images/sec8/rocket.png";

export default function Next() {
  return (
    <main className="next-page">
      <h1 className="next-title">NEXT — Africa’s Future Is Within Reach</h1>

      <div className="next-row">

        {/* CARD 1 */}
        <div className="next-card">
          <div
            className="next-image large"
            style={{ backgroundImage: `url(${s1})` }}
          />
          <div className="next-text">
            <h3>Olympics in the Desert</h3>
            <p>
              Africa can build a <strong>solar‑powered Olympic city</strong> in the desert —
              cooled by renewable energy, lit by hydropower, and connected by high‑speed
              electric transport.
            </p>
            <p>
              With stable electricity, Africa stops asking permission —
              <strong> it becomes the world’s stage.</strong>
            </p>
            <p>
              Imagine stadiums glowing at night, powered by rivers and reactors.
              Imagine athletes from every nation walking into an African arena
              built with engineering precision and continental pride.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="next-card">
          <div
            className="next-image large"
            style={{ backgroundImage: `url(${s2})` }}
          />
          <div className="next-text">
            <h3>Africa’s Rocket to Orbit</h3>
            <p>
              Space is not far — it is engineering, electricity, and discipline.
              With industrial power, Africa can build <strong>launch vehicles,
              guidance systems, and orbital platforms</strong>.
            </p>
            <p>
              A continent with hydropower, nuclear power, and solar megaprojects
              can power <strong>rocket assembly plants, test stands, and launch pads</strong>.
            </p>
            <p>
              Africa can design satellites, map its land, monitor its oceans,
              and send its own missions beyond Earth.
            </p>
            <p>
              <strong>From the desert to the moon — power makes it possible.</strong>
            </p>
          </div>
        </div>

      </div>

      <section className="next-conclusion">
        <h2>Conclusion — Power Creates Possibility</h2>
        <p>
          Electricity is the foundation of every advanced nation. With stable power,
          Africa can build Olympic cities, aerospace industries, supercomputing hubs,
          medical research centers, and manufacturing giants.
        </p>
        <p>
          The future is not waiting. The future is built by nations that choose
          <strong>infrastructure, engineering, and long‑term vision</strong>.
        </p>
        <p>
          Africa’s next chapter is not imagined — it is engineered.
        </p>
      </section>

      <footer className="next-footer">
         Light Up Africa — A Continental Awakening
      </footer>

      <Link to="/task" className="next-arrow">←</Link>
    </main>
  );
}
