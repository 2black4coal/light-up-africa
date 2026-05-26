import React from "react";
import { Link } from "react-router-dom";
import "../../styles/generation.css";

import s1 from "../../assets/images/sec5/s1.jpg";
import s2 from "../../assets/images/sec5/s2.jpg";
import s3 from "../../assets/images/sec5/s3.jpg";

export default function Generation() {
  const blocks = [
    {
      image: s1,
      text: `
        <p><strong>What large-scale power really looks like</strong></p>
        <p>A single modern power station can generate over
        <strong>30 million megawatt-hours per year</strong>,
        supplying electricity to <strong>4–5 million homes</strong>
        and supporting hospitals, transport systems, factories,
        universities, and digital infrastructure.</p>
        <p>This level of capacity stabilizes national grids and removes
        chronic blackouts — permanently.</p>
      `
    },
    {
      image: s2,
      text: `
        <p><strong>What it costs — and what it returns</strong></p>
        <p><strong>Construction time:</strong> 7–10 years<br/>
        <strong>Total investment:</strong> $5–8 billion USD<br/>
        <strong>Installed capacity:</strong> 3,000–4,000 MW class</p>
        <p><strong>Jobs created:</strong><br/>
        • 30,000–50,000 workers during construction<br/>
        • Thousands of permanent technical and engineering jobs<br/>
        • Entire supply chains formed around the project</p>
        <p>Power infrastructure pays for itself through decades of industrial growth.</p>
      `
    },
    {
      image: s3,
      text: `
        <p><strong>A message to African leadership</strong></p>
        <p>Africa has the rivers.<br/>
        Africa has the land.<br/>
        Africa has the engineers.<br/>
        Africa has the workforce.</p>
        <p>What is needed now is <strong>execution</strong>.</p>
        <p>Electricity is not politics. Electricity is
        <strong>economic survival</strong>.
        Nations that prioritize power unlock manufacturing,
        employment, innovation, and stability.</p>
        <p>Build continuously. Maintain relentlessly.
        This is how continents rise.</p>
      `
    }
  ];

  return (
    <main className="generation-page">
      <h1 className="generation-title">Modern Power Stations — Scale, Cost & National Impact</h1>

      {blocks.map((item, index) => (
        <div key={index} className={`generation-row ${index % 2 === 1 ? "reverse" : ""}`}>
          <div
            className="generation-image"
            style={{ backgroundImage: `url(${item.image})` }}
          />

          <div
            className="generation-text"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}

      <section className="generation-conclusion">
        <h2>Conclusion — Power Is the Foundation of Development</h2>
        <p>
          Modern power stations are not luxuries — they are the backbone of national progress.
          They fuel industries, stabilize economies, and create millions of jobs across supply chains.
        </p>
        <p>
          Africa has the resources to build world‑class power systems. What remains is the leadership
          to prioritize electricity as the engine of sovereignty, prosperity, and continental growth.
        </p>
      </section>

      <footer className="generation-footer">
        Light Up Africa — A Continental Awakening
      </footer>

      <Link to="/task" className="generation-arrow">←</Link>
    </main>
  );
}
