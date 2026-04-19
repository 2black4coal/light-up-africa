import React from "react";
import "../styles/sec1fresh.css";   // NEW UNIQUE CSS FILE

import l1 from "../assets/images/sec1/l1.jpg";
import s1 from "../assets/images/sec1/s1.jpg";
import s2 from "../assets/images/sec1/s2.jpg";

export default function Sec1() {
  const blocks = [
    {
      image: l1,
      text:`
  <p><strong>Project Scale:</strong> The Grand Ethiopian Renaissance Dam stands as one of Africa’s largest infrastructure achievements — a multi‑billion‑dollar project built through national determination and citizen funding.</p>

  <p><strong>National Impact:</strong> The dam reshaped Ethiopia’s energy capacity, strengthened grid stability, and proved what disciplined execution can achieve when a nation commits fully.</p>

  <p><strong>Continental Message:</strong> GERD demonstrates that Africa can design, fund, and complete world‑class engineering projects at global scale.</p>
`
    },
    {
      image: s1,
      text: `
  <p><strong>Workforce & Hours:</strong> Thousands of engineers, technicians, and labor teams worked millions of combined hours across more than a decade to bring the project to life.</p>

  <p><strong>Timeline:</strong> Construction began in 2011 and reached full completion in 2025, marking a historic milestone in African infrastructure.</p>

  <p><strong>Impact:</strong> The project expanded regional power capacity, improved grid reliability, and showcased the power of coordinated national execution.</p>
`
    },
    {
      image: s2,
      text: `
  <p><strong>Completion & Output:</strong> GERD now delivers over <strong>5,150 MW</strong> of clean hydroelectric power — enough to transform industries, cities, and rural communities.</p>

  <p><strong>Strategic Value:</strong> The dam strengthens energy independence, supports manufacturing growth, and reduces long‑term reliance on fossil fuels.</p>

  <p><strong>Message:</strong> If Africa can build this, Africa can build anything — the only requirement is execution, unity, and the will to finish what we start, no matter the scale or the challenge.</p>


`
    }
  ];

  return (
    <section className="sec1fresh-wrapper">
      <h2 className="sec1fresh-heading">Grand Ethiopian Renaissance Dam</h2>

      <div className="sec1fresh-grid">
        {blocks.map((item, index) => (
          <div key={index} className="sec1fresh-item">
            <div
              className="sec1fresh-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div
              className="sec1fresh-text"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
