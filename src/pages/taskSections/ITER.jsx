import React from "react";
import { Link } from "react-router-dom";
import "../../styles/iter.css";

import r1 from "../../assets/images/iter/r1.jpg";
import r2 from "../../assets/images/iter/r2.jpg";
import r3 from "../../assets/images/iter/r3.jpg";
import r4 from "../../assets/images/iter/r4.jpg";

export default function ITER() {
  const rows = [
    {
      image: r1,
      text: `
        <p><strong>ITER — Building a Star on Earth:</strong> ITER is the world’s largest fusion energy experiment, located in France. Its mission is simple but historic: <strong>recreate the power of the sun</strong> using hydrogen atoms, extreme heat, and magnetic confinement.</p>

        <p>Fusion is the same process that powers every star in the universe. If ITER succeeds, humanity gains <strong>limitless clean energy</strong> — no carbon, no fuel shortages, no blackouts.</p>

        <p>This is not science fiction. ITER is real, under construction, and Africa must not watch from the sidelines.</p>
      `
    },
    {
      image: r2,
      text: `
        <p><strong>The Technology — Magnetic Confinement Fusion:</strong> ITER uses a device called a <strong>tokamak</strong>, a giant magnetic chamber shaped like a ring.</p>

        <p>Inside it, hydrogen fuel is heated to <strong>150 million°C</strong> — ten times hotter than the sun’s core. At this temperature, atoms fuse and release enormous energy.</p>

        <p><strong>Superconducting magnets</strong> hold the plasma in place, preventing it from touching the walls. This is the heart of ITER: <strong>pure electromagnetism controlling a miniature star</strong>.</p>
      `
    },
    {
      image: r3,
      text: `
        <p><strong>The Mechanism — Turning Fusion Into Electricity:</strong></p>

        <p>When hydrogen atoms fuse, they release high‑energy neutrons. These neutrons hit the reactor walls, heating them up.</p>

        <p>This heat is transferred to water, producing <strong>steam</strong> that spins <strong>turbines</strong> — just like hydro, nuclear, or gas plants.</p>

        <p>The difference? Fusion fuel is nearly infinite. A few grams of hydrogen can power entire cities.</p>

        <p>Fusion is the ultimate energy source: <strong>no emissions, no waste, no meltdown risk</strong>.</p>
      `
    },
    {
      image: r4,
      text: `
        <p><strong>Africa Must Join ITER:</strong></p>

        <p>ITER is the future of global energy. Nations investing today will own the energy systems of tomorrow.</p>

        <p>Africa cannot afford to sit out. This is where stolen funds, mismanaged budgets, and wasted resources should go — <strong>into science, engineering, and the future</strong>.</p>

        <p>Joining ITER means:</p>
        <p>• Training African fusion engineers<br/>
           • Access to global research<br/>
           • Seats at the table of future energy<br/>
           • Technology transfer for generations</p>

        <p><strong>Fusion will power the world. Africa must be part of it.</strong></p>
      `
    }
  ];

  return (
    <main className="iter-page">
      <h1 className="iter-title">ITER — The Sun on Earth</h1>

      {rows.map((row, index) => (
        <div key={index} className={`iter-row ${index % 2 === 1 ? "reverse" : ""}`}>
          <div
            className="iter-image"
            style={{ backgroundImage: `url(${row.image})` }}
          />
          <div
            className="iter-text"
            dangerouslySetInnerHTML={{ __html: row.text }}
          />
        </div>
      ))}

      <section className="iter-conclusion">
        <h2>Africa’s Call — Join the Future</h2>
        <p>
          ITER is not just a project — it is the next chapter of human civilization.
          It is the moment humanity learns to build its own star.
        </p>
        <p>
          Africa must not be a spectator. Africa must invest, participate, and claim
          its place in the global scientific community.
        </p>
        <p>
          The nations that master fusion will lead the world. Africa must be among them.
        </p>
      </section>

      <footer className="iter-footer">
         Light Up Africa — A Continental Awakening
      </footer>

      <Link to="/task" className="iter-arrow">←</Link>
    </main>
  );
}
