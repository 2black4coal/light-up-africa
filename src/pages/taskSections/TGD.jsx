import React from "react";
import { Link } from "react-router-dom";
import "../../styles/tgd.css";

import s1 from "../../assets/images/sec2/s1.jpg";
import s2 from "../../assets/images/sec2/s2.jpg";

export default function TGD() {
  const rows = [
    {
      image: s1,
      text: `
        <p><strong>The Three Gorges Dam</strong> stands as the largest hydroelectric power station on Earth,
        with an installed capacity of <strong>22,500 megawatts</strong>. Its 32 massive Francis turbines —
        each rated at 700 MW — convert the raw force of the Yangtze River into clean, industrial‑scale electricity.</p>

        <p>Water plunges through enormous steel penstocks, striking turbine blades with precision‑engineered force.
        This rotational energy drives generators the size of small buildings, producing enough electricity to power
        entire provinces.</p>

        <p>On average, the dam generates around <strong>100 terawatt‑hours</strong> of electricity every year —
        reducing coal dependence, stabilizing the grid, and supporting China’s industrial expansion.</p>

        <p>The project required an investment between <strong>$25–35 billion</strong>, covering civil works,
        turbines, transmission lines, resettlement, and environmental engineering.</p>
      `
    },
    {
      image: s2,
      text: `
        <p>Construction spanned more than a decade, employing <strong>20,000–40,000 workers</strong> — engineers,
        welders, electricians, crane operators, and heavy‑equipment specialists.</p>

        <p>Beyond wages, the project created long‑term economic uplift: workers gained high‑value technical skills,
        local economies expanded, and entire supply chains grew around the construction effort.</p>

        <p><strong>Lesson for Africa:</strong> With discipline, engineering rigor, and political will, Africa’s rivers
        can power cities, industries, and rural communities. Hydropower is not just electricity — it is sovereignty,
        stability, and a pathway to prosperity.</p>
      `
    }
  ];

  return (
    <main className="tgd-page">

      {/* PAGE TITLE */}
      <h1 className="tgd-title">Three Gorges Dam — Scale, Power & Lessons for Africa</h1>

      {/* ROWS */}
      {rows.map((row, index) => (
        <div key={index} className={`tgd-row ${index % 2 === 1 ? "reverse" : ""}`}>
          <div
            className="tgd-image"
            style={{ backgroundImage: `url(${row.image})` }}
          ></div>

          <div
            className="tgd-text"
            dangerouslySetInnerHTML={{ __html: row.text }}
          ></div>
        </div>
      ))}

      {/* CONCLUSION */}
      <section className="tgd-conclusion">
        <h2>Conclusion — What Africa Can Learn</h2>
        <p>
          The Three Gorges Dam proves what becomes possible when a nation commits to long‑term
          infrastructure, disciplined execution, and engineering mastery. Africa holds rivers with
          equal or greater potential — from the Congo to the Nile to the Zambezi. With unity,
          planning, and political will, Africa can build hydropower systems that transform economies,
          electrify industries, and secure energy independence for generations.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="tgd-footer">
        Light Up Africa — A Continental Awakening
      </footer>

      {/* ARROW BACK TO TASK */}
      <Link to="/task" className="tgd-arrow">←</Link>
    </main>
  );
}
