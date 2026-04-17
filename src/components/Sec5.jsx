import React from "react";
import "../styles/sec5fresh.css";

import s1 from "../assets/images/sec5/s1.jpg";
import s2 from "../assets/images/sec5/s2.jpg";
import s3 from "../assets/images/sec5/s3.jpg";

export default function Sec5() {
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
    <section className="sec5fresh-wrapper">
      <h2 className="sec5fresh-heading">Modern Power Stations — Scale, Cost, and National Impact</h2>

      <div className="sec5fresh-grid">
        {blocks.map((item, index) => (
          <div key={index} className="sec5fresh-item">
            <div
              className="sec5fresh-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div
              className="sec5fresh-text"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
