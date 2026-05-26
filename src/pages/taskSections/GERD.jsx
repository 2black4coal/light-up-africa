import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../styles/gerd.css";

import l1 from "../../assets/images/sec1/l1.jpg";
import s1 from "../../assets/images/sec1/s1.jpg";
import s2 from "../../assets/images/sec1/s2.jpg";

export default function GERD() {
  const blocks = [
    {
      image: l1,
      text: `
        <p><strong>Project Scale:</strong> The Grand Ethiopian Renaissance Dam is one of Africa’s largest hydro‑engineering achievements — a multi‑billion‑dollar project built through national unity, citizen funding, and relentless determination.</p>

        <p><strong>National Impact:</strong> GERD reshaped Ethiopia’s energy future, stabilizing the grid, reducing dependence on imported fuel, and unlocking the potential for industrial growth across the country.</p>

        <p><strong>Continental Message:</strong> GERD stands as a declaration that Africa can design, fund, and complete world‑class megaprojects without waiting for foreign approval or permission.</p>
      `
    },
    {
      image: s1,
      text: `
        <p><strong>Workforce & Hours:</strong> Over a decade of construction, thousands of engineers, hydrologists, technicians, and labor teams contributed millions of hours to bring GERD to life — a generational effort built on discipline and sacrifice.</p>

        <p><strong>Timeline:</strong> Construction began in 2011 and reached full completion in 2025, marking a historic milestone in African infrastructure and a turning point in regional energy independence.</p>

        <p><strong>Impact:</strong> GERD expanded regional power capacity, strengthened grid reliability, and demonstrated the power of coordinated national execution.</p>
      `
    },
    {
      image: s2,
      text: `
        <p><strong>Completion & Output:</strong> GERD now delivers over <strong>5,150 MW</strong> of clean hydroelectric power — enough to power cities, industries, and millions of homes across East Africa.</p>

        <p><strong>Strategic Value:</strong> The dam reduces fossil‑fuel reliance, supports manufacturing, and positions Ethiopia as a regional energy exporter.</p>

        <p><strong>Message:</strong> GERD proves that Africa can build anything — the only requirement is unity, execution, and the courage to finish what we start.</p>
      `
    }
  ];

  return (
    <main className="gerd-page">

   

      {/* ARROW */}
      <Link to="/task" className="gerd-arrow">←</Link>

      {/* TITLE */}
      <h1 className="gerd-title">GERD: The Dam That Changed Africa</h1>

      {/* GRID */}
      <section className="gerd-grid">
        {blocks.map((item, index) => (
          <div key={index} className="gerd-item">
            <div
              className="gerd-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div
              className="gerd-text"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        ))}
      </section>

      {/* EXTRA CONTENT */}
      <section className="gerd-extra">
        <h2>The Symbol of African Capability</h2> 

        <p>
          GERD is more than concrete and turbines — it is a symbol of African ambition.
          It represents a generation refusing to accept darkness as destiny. It shows
          that when Africans unite behind a shared mission, we can build structures
          that reshape history and redefine our future.
        </p>

        <p>
          The dam’s influence extends beyond Ethiopia. It affects regional diplomacy,
          energy trade, industrial growth, and the future of African infrastructure.
          GERD is a blueprint for what the continent can achieve when vision meets
          execution — when courage meets engineering.
        </p>

        <p>
          This project is a reminder that Africa’s greatest resource is not water,
          land, or minerals — it is the will of its people. GERD is proof that
          Africa can rise, build, and lead.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="gerd-footer">
        Light Up Africa — A Continental Awakening
      </footer>

    </main>
  );
}
