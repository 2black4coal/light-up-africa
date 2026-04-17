import React from "react";
import "../styles/secNuclearFresh.css";

import n1 from "../assets/images/nuclear/n1.png";
import n2 from "../assets/images/nuclear/n2.png";

export default function SecNuclear() {
  const sections = [
    {
      image: n1,
      text: `
        <p><strong>Nuclear Power Plant — Industrial-Grade Electricity:</strong> Reactors use controlled fission to produce steady baseload power through fuel rods, coolant loops, steam generators, and high‑efficiency turbines. One plant delivers 1,000–1,600 MW of clean electricity for millions of homes, factories, hospitals, and data centers.</p>

        <p><strong>Economic Impact:</strong> Construction creates 5,000–10,000 jobs and leaves 500–1,000 permanent technical roles. With costs of $6–12 billion, each plant becomes a long-term national asset.</p>

        <p><strong>Long-term Value:</strong> Reactors run 60–80 years with low fuel costs, providing a stable energy backbone for industry, transport, and digital infrastructure.</p>

        <p><strong>Continental Advantage:</strong> Africa has uranium, engineers, and the capacity to build reactors. Nuclear power offers unmatched reliability for a modern economy.</p>
      `
    },
    {
      image: n2,
      text: `
        <p><strong>A message to African leadership:</strong> Nuclear power is within Africa’s reach — the technology, fuel, and talent already exist.</p>

        <p><strong>Strategic Truth:</strong> Nations with reliable electricity attract industry and investment; those without remain limited.</p>

        <p><strong>Leadership Challenge:</strong> Africa can build reactors now. What’s missing is leadership willing to prioritize energy over politics. Electricity is sovereignty.</p>

        <p><strong>Continental Call:</strong> Approve reactors. Train engineers. Secure long-term power. Progress belongs to nations that choose action over excuses.</p>
      `
    }
  ];

  return (
    <section className="secNuclearFresh-wrapper">
      <h2 className="secNuclearFresh-heading">Nuclear Power — Industrial Strength, Long-Term Stability</h2>

      {sections.map((item, index) => (
        <div
          key={index}
          className={`secNuclearFresh-row ${index === 1 ? "reverse" : ""}`}
        >
          <div
            className="secNuclearFresh-image"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div
            className="secNuclearFresh-text"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}
    </section>
  );
}
