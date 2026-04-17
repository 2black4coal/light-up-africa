import React from "react";
import "../styles/sec1fresh.css";   // NEW UNIQUE CSS FILE

import l1 from "../assets/images/sec1/l1.jpg";
import s1 from "../assets/images/sec1/s1.jpg";
import s2 from "../assets/images/sec1/s2.jpg";

export default function Sec1() {
  const blocks = [
    {
      image: l1,
      text: `
        <p><strong>Project Scale:</strong> The Grand Ethiopian Renaissance Dam is one of Africa’s largest infrastructure achievements — a multi‑billion‑dollar investment built through national determination and citizen funding.</p>
      `
    },
    {
      image: s1,
      text: `
        <p><strong>Workforce & Hours:</strong> Thousands of engineers, technicians, and labor teams worked millions of combined hours across more than a decade to bring the project to life.</p>
        <p><strong>Timeline:</strong> Construction began in 2011 and reached full completion in 2025.</p>
      `
    },
    {
      image: s2,
      text: `
        <p><strong>Completion & Impact:</strong> GERD now delivers over <strong>5,150 MW</strong> of clean power — proving that Africa can build, complete, and own world‑class engineering projects.</p>
        <p><strong>Message:</strong> If we built this, we can build anything.</p>
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
