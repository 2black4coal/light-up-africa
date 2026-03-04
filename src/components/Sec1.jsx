import React from "react";
import "../styles/b.css"; // unified CSS for both Sec1 and Sec5

import l1 from "../assets/images/sec1/l1.jpg";
import s1 from "../assets/images/sec1/s1.jpg";
import s2 from "../assets/images/sec1/s2.jpg";

export default function Sec1() {
  const blocks = [
    {
      image: l1,
      text: `
        <p><strong>Grand Ethiopian Renaissance Dam:</strong> Located in Guba, Benishangul-Gumuz, Ethiopia. Built in 2011 and completed over more than a decade, with final inauguration in 2025. Thousands of <strong>engineers, technicians, and workers</strong> contributed to its construction. It now generates about <strong>5,150 megawatts</strong> of clean hydroelectric power. GERD stands as Africa’s largest hydro project, funded largely by Ethiopian citizens, symbolizing engineering ambition, national industrialization, and the continent’s push toward energy independence.</p>
      `
    },
    {
      image: s1,
      text: `
        <p><strong>Workforce:</strong> The construction mobilized thousands of <strong>engineers, technicians, and construction workers</strong> drawn from domestic firms and international contractors; exact headcounts vary by phase and are not consistently reported.</p>
        <p><strong>Power output:</strong> Designed for ~<strong>5,150 MW</strong> of clean electricity.</p>
        <p><strong>Location:</strong> Guba, Benishangul-Gumuz, Ethiopia.</p>
      `
    },
    {
      image: s2,
      text:`
<p><strong>Unique engineering scale:</strong> GERD is Africa’s largest hydroelectric project and one of its most ambitious infrastructure undertakings.</p>
<p><strong>Strategic significance:</strong> It shifts Ethiopia from power shortages to potential regional electricity exporter, supporting industrialization and rural electrification.</p>
<p><strong>Contested geopolitics:</strong> GERD’s control of the Blue Nile has driven years of negotiations with downstream nations, showing how one dam can reshape regional politics.</p>
`

    }
  ];

  return (
    <section className="sec5-grid">
      {blocks.map((item, index) => (
        <div key={index} className="sec5-item">
          <div
            className="sec5-image"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div
            className="sec5-text"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}
    </section>
  );
}