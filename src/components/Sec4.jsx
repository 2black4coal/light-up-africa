import React from "react";
import "../styles/sec4fresh.css";

import s1 from "../assets/images/sec4/s1.jpg";
import s2 from "../assets/images/sec4/s2.jpg";

export default function Sec4() {
  const images = [s1, s2];

  const texts = [
    `
      <p><strong>Kariba Dam — Zambezi River:</strong> A landmark hydroelectric project built in four years, delivering 1,626 MW that transformed cities, mines, and industries.</p>
      <p>With limited tools and £79 million (nearly $1B today), Kariba proved that disciplined planning and focused execution can turn Africa’s natural resources into national strength.</p>
      <p>Its impact and engineering legacy show that Africa’s rivers are opportunities waiting for leadership, and that when the continent commits, it builds at world‑class speed.</p>
      <p><strong>Enduring Truth:</strong> Kariba stands as proof that Africa’s greatest advantage is not just water or land, but the ability to build boldly when purpose is clear.</p>
      <p><strong>Continental Lesson:</strong> The success of Kariba is a reminder that Africa’s future power lies in projects that outlive politics and uplift generations.</p>
    `,
    `
      <p><strong>A message to African leadership:</strong></p>
      <p>Kariba succeeded through discipline and purpose, not advanced technology or perfect conditions.</p>
      <p>Today Africa has stronger engineers and better tools — what’s missing is <strong>decisive leadership</strong> to turn potential into power.</p>
      <p>Power shortages are not a resource problem but a priority problem. Electricity is sovereignty, and nations rise when leaders choose infrastructure over excuses.</p>
      <p>Build the dams. Build the grids. Build the future Africa deserves.</p>
    `
  ];

  return (
    <section className="sec4fresh-wrapper">
      <h2 className="sec4fresh-heading">Kariba Dam — Power, Discipline, Legacy</h2>

      {/* ROW 1 */}
      <div className="sec4fresh-row">
        <div
          className="sec4fresh-image"
          style={{ backgroundImage: `url(${images[0]})` }}
        />
        <div
          className="sec4fresh-text"
          dangerouslySetInnerHTML={{ __html: texts[0] }}
        />
      </div>

      {/* ROW 2 */}
      <div className="sec4fresh-row reverse">
        <div
          className="sec4fresh-image"
          style={{ backgroundImage: `url(${images[1]})` }}
        />
        <div
          className="sec4fresh-text"
          dangerouslySetInnerHTML={{ __html: texts[1] }}
        />
      </div>
    </section>
  );
}
