import React from "react";
import "../styles/sec3fresh.css";

import s1 from "../assets/images/sec3/s1.jpg";
import s2 from "../assets/images/sec3/s2.jpg";

export default function Sec3() {
  const sections = [
    {
      image: s1,
      text: `
        <p><strong>Turbine System:</strong> High‑efficiency Francis turbines convert river force into electricity with up to 95% efficiency.</p>
        <p><strong>Units:</strong> 20 main turbines + 4 auxiliary supporting grid stability.</p>
        <p><strong>Output:</strong> 700 MW each — delivering 14,000 MW for cities, industries, and irrigation.</p>
        <p><strong>Scale:</strong> Runners weigh hundreds of tons; generators exceed 600–1,000 tons.</p>
        <p><strong>Cost:</strong> $19.6B and ~9 years of construction.</p>
        <p><strong>Workforce:</strong> Tens of thousands of engineers, welders, electricians, and technicians.</p>
        <p><strong>Impact:</strong> One turbine powers up to 3 million homes — a full system reshapes national energy security.</p>
      `
    },
    {
      image: s2,
      text: `
        <p><strong>Message for African Leaders:</strong></p>
        <p>This turbine system proves that planning, expertise, and discipline can turn rivers into reliable power.</p>
        <p>Africa has the rivers and the talent — what’s needed is <strong>decisive leadership</strong>.</p>
        <p><strong>Impact:</strong> Thousands of skilled jobs, stronger industries, and long-term energy stability.</p>
        <p><strong>Possibility:</strong> Hydro turbines are engines of growth and independence.</p>
      `
    }
  ];

  return (
    <section className="sec3fresh-wrapper">
      <h2 className="sec3fresh-heading">Hydroelectric Turbine Systems — Power, Scale, and Engineering</h2>

      {sections.map((item, index) => (
        <div
          key={index}
          className={`sec3fresh-row ${index === 1 ? "reverse" : ""}`}
        >
          <div
            className="sec3fresh-image"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div
            className="sec3fresh-text"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}
    </section>
  );
}
