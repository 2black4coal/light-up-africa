import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nuclear.css";

import n1 from "../../assets/images/nuclear/n1.png";
import n2 from "../../assets/images/nuclear/n2.png";

export default function Nuclear() {
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
    <main className="nuclear-page">
      <h1 className="nuclear-title">Nuclear Power — Industrial Strength & Long-Term Stability</h1>

      {sections.map((item, index) => (
        <div key={index} className={`nuclear-row ${index === 1 ? "reverse" : ""}`}>
          <div
            className="nuclear-image"
            style={{ backgroundImage: `url(${item.image})` }}
          />

          <div
            className="nuclear-text"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}

      <section className="nuclear-conclusion">
        <h2>Conclusion — Nuclear Power Is Africa’s Strategic Advantage</h2>
        <p>
          Nuclear energy is not futuristic — it is present-day industrial power. It provides
          unmatched stability, low long-term costs, and the ability to support manufacturing,
          transport, digital systems, and national security.
        </p>
        <p>
          Africa has the uranium, the engineers, and the capability. What remains is leadership
          willing to build reactors, train specialists, and secure the continent’s energy future.
        </p>
      </section>

      <footer className="nuclear-footer">
         Light Up Africa — A Continental Awakening
      </footer>

      <Link to="/task" className="nuclear-arrow">←</Link>
    </main>
  );
}
