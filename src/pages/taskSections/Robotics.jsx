import React from "react";
import { Link } from "react-router-dom";
import "../../styles/robotics.css";

import r1 from "../../assets/images/robotics/r1.jpg";
import r2 from "../../assets/images/robotics/r2.jpg";
import r3 from "../../assets/images/robotics/r3.jpg";
import r4 from "../../assets/images/robotics/r4.jpg";

export default function Robotics() {
  const rows = [
    {
      image: r1,
      text: `
        <p><strong>Robotics & Intelligence — The New Industrial Evolution:</strong>
        Robotics is the fusion of mechanical engineering, electronics, and <strong>artificial intelligence</strong>.
        Robots were once simple machines. Today, AI gives them <strong>perception, decision‑making, and autonomy</strong>.</p>

        <p>Modern robots see, learn, adapt, and improve. They are no longer tools — they are <strong>intelligent systems</strong>
        capable of transforming industries, cities, and entire nations.</p>

        <p>This is the beginning of the <strong>Age of Autonomous Africa</strong>.</p>
      `
    },
    {
      image: r2,
      text: `
        <p><strong>The Evolution of Intelligence:</strong> Robotics has passed through three eras:</p>

        <p>• <strong>Mechanical Era:</strong> Simple arms, gears, motors.<br/>
           • <strong>Programmable Era:</strong> Industrial robots repeating fixed tasks.<br/>
           • <strong>AI Era:</strong> Robots that <strong>think, learn, and adapt</strong>.</p>

        <p>AI models — neural networks, deep learning, reinforcement learning — give robots the ability to
        <strong>recognize objects, navigate environments, predict outcomes, and make decisions</strong>.</p>

        <p>Robots are no longer controlled — they are <strong>trained</strong>.</p>
      `
    },
    {
      image: r3,
      text: `
        <p><strong>The Robotics Mechanism — How Intelligent Machines Work:</strong></p>

        <p>Robots combine:</p>
        <p>• <strong>Sensors:</strong> cameras, lidar, radar, microphones<br/>
           • <strong>Actuators:</strong> motors, hydraulics, servos<br/>
           • <strong>Electromagnetism:</strong> the force behind every motor and encoder<br/>
           • <strong>AI Models:</strong> perception, planning, control<br/>
           • <strong>Control Systems:</strong> feedback loops that stabilize movement</p>

        <p>AI interprets the world. Robotics interacts with it. Together, they form <strong>autonomous intelligence</strong>.</p>
      `
    },
    {
      image: r4,
      text: `
        <p><strong>Africa’s Call — Join the Robotics & AI Revolution:</strong></p>

        <p>AI and robotics will define the next century. Nations that master them will lead manufacturing,
        agriculture, medicine, transportation, and defense.</p>

        <p>Africa must not be a consumer — it must be a <strong>creator</strong>.</p>

        <p>Invest in robotics labs. Build AI institutes. Train engineers. Redirect wasted funds into
        <strong>automation, intelligence, and innovation</strong>.</p>

        <p>The future belongs to nations that build intelligent machines. Africa must be one of them.</p>
      `
    }
  ];

  return (
    <main className="robotics-page">
      <h1 className="robotics-title">ROBOTICS & INTELLIGENCE — The Age of Autonomous Africa</h1>

      {rows.map((row, index) => (
        <div key={index} className={`robotics-row ${index % 2 === 1 ? "reverse" : ""}`}>
          <div
            className="robotics-image"
            style={{ backgroundImage: `url(${row.image})` }}
          />

          <div
            className="robotics-text"
            dangerouslySetInnerHTML={{ __html: row.text }}
          />
        </div>
      ))}

      <section className="robotics-conclusion">
        <h2>Africa’s Future Is Intelligent</h2>
        <p>
          Robotics and AI are not optional — they are the foundation of future economies.
          Nations that build intelligent machines will control production, medicine,
          agriculture, transportation, and security.
        </p>
        <p>
          Africa must invest boldly, train relentlessly, and innovate without hesitation.
          The age of autonomous systems has begun — and Africa must lead.
        </p>
      </section>

      <footer className="robotics-footer">
         Light Up Africa — A Continental Awakening
      </footer>

      <Link to="/task" className="robotics-arrow">←</Link>
    </main>
  );
}
