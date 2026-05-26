import React from "react";
import { Link } from "react-router-dom";
import "../../styles/kariba.css";

import s1 from "../../assets/images/sec4/s1.jpg";
import s2 from "../../assets/images/sec4/s2.jpg";

export default function Kariba() {
  const rows = [
    {
      image: s1,
      text: `
        <p><strong>Kariba Dam — Zambezi River:</strong> A landmark hydroelectric project built in four years, delivering 1,626 MW that transformed cities, mines, and industries.</p>
        <p>With limited tools and £79 million (nearly $1B today), Kariba proved that disciplined planning and focused execution can turn Africa’s natural resources into national strength.</p>
        <p>Its impact and engineering legacy show that Africa’s rivers are opportunities waiting for leadership, and that when the continent commits, it builds at world‑class speed.</p>
        <p><strong>Enduring Truth:</strong> Kariba stands as proof that Africa’s greatest advantage is not just water or land, but the ability to build boldly when purpose is clear.</p>
        <p><strong>Continental Lesson:</strong> The success of Kariba is a reminder that Africa’s future power lies in projects that outlive politics and uplift generations.</p>
      `
    },
    {
      image: s2,
      text: `
        <p><strong>A message to African leadership:</strong></p>
        <p>Kariba succeeded through discipline and purpose, not advanced technology or perfect conditions.</p>
        <p>Today Africa has stronger engineers and better tools — what’s missing is <strong>decisive leadership</strong> to turn potential into power.</p>
        <p>Power shortages are not a resource problem but a priority problem. Electricity is sovereignty, and nations rise when leaders choose infrastructure over excuses.</p>
        <p>Build the dams. Build the grids. Build the future Africa deserves.</p>
      `
    }
  ];

  return (
    <main className="kariba-page">
      <h1 className="kariba-title">Kariba Dam — Power, Discipline & Legacy</h1>

      {rows.map((row, index) => (
        <div key={index} className={`kariba-row ${index % 2 === 1 ? "reverse" : ""}`}>
          <div
            className="kariba-image"
            style={{ backgroundImage: `url(${row.image})` }}
          />

          <div
            className="kariba-text"
            dangerouslySetInnerHTML={{ __html: row.text }}
          />
        </div>
      ))}

      <section className="kariba-conclusion">
        <h2>Conclusion — Africa’s Rivers, Africa’s Future</h2>
        <p>
          Kariba Dam stands as one of Africa’s greatest engineering achievements — built with limited tools,
          limited money, and unlimited discipline. It proves that Africa’s challenge is not capability, but
          commitment. When leadership is clear and purpose is strong, Africa builds at world‑class speed.
        </p>
        <p>
          The continent’s rivers hold enough energy to power industries, cities, and generations. What remains
          is the will to build boldly, plan long‑term, and treat electricity as the foundation of sovereignty.
        </p>
      </section>

      <footer className="kariba-footer">
         Light Up Africa — A Continental Awakening
      </footer>

      <Link to="/task" className="kariba-arrow">←</Link>
    </main>
  );
}
