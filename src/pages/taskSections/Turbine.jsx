import React from "react";
import { Link } from "react-router-dom";
import "../../styles/turbine.css";

import s1 from "../../assets/images/sec3/s1.jpg";
import s2 from "../../assets/images/sec3/s2.jpg";

export default function Turbine() {
  const sections = [
    {
      image: s1,
      text: `
        <p><strong>Turbine System:</strong> High‑efficiency Francis turbines convert river force into electricity with up to 95% efficiency.</p>
        <p><strong>Units:</strong> 20 main turbines plus 4 auxiliary units that stabilize flow and allow flexible dispatch.</p>
        <p><strong>Output:</strong> 700 MW each — delivering 14,000 MW for cities, factories, farms, and vital public services.</p>
        <p><strong>Scale:</strong> Turbine runners weigh hundreds of tons, while generators exceed 600–1,000 tons and require exacting assembly.</p>
        <p><strong>Engineering:</strong> Every turbine is supported by precision cooling, lubrication, and vibration monitoring systems to run continuously for decades.</p>
        <p><strong>Grid integration:</strong> Fast-response governors allow the plant to balance demand, support frequency control, and reduce reliance on fossil peaker plants.</p>
        <p><strong>Impact:</strong> One turbine can power more than 3 million homes — together, the full system reshapes energy security and industrial capacity.</p>
      `
    },
    {
      image: s2,
      text: `
        <p><strong>Message for African Leaders:</strong> This turbine system shows that rivers can become reliable engines of growth when engineering, investment, and governance align.</p>
        <p>Africa has abundant river resources, skilled labor, and rising technical expertise. What is needed now is decisive planning, strong institutions, and long-term financing.</p>
        <p><strong>Jobs:</strong> Building and operating hydro turbines creates thousands of high-value positions for engineers, welders, electricians, and technicians.</p>
        <p><strong>Training:</strong> Developing local turbine manufacturing, assembly, and maintenance expertise keeps value inside African economies.</p>
        <p><strong>Opportunity:</strong> Hydro turbines are not just electricity assets — they are foundation stones for industrialization, irrigation, and climate-resilient development.</p>
      `
    }
  ];

  return (
    <main className="turbine-page">
      <h1 className="turbine-title">Hydroelectric Turbine Systems — Power, Precision & African Opportunity</h1>

      {sections.map((item, index) => (
        <div key={index} className={`turbine-row ${index % 2 === 1 ? "reverse" : ""}`}>
          <div
            className="turbine-image"
            style={{ backgroundImage: `url(${item.image})` }}
          />

          <div
            className="turbine-text"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </div>
      ))}

      <section className="turbine-conclusion">
        <h2>Conclusion — Rivers, Turbines, and African Growth</h2>
        <p>
          The turbine systems shown here prove that large-scale hydroelectric power is fundamentally
          about disciplined engineering, strong institutions, and long-term planning. Africa already has
          the water resources and the human talent — the next step is building the projects that turn
          those rivers into lasting prosperity.
        </p>
        <p>
          When turbines are paired with modern grid planning, transmission investment, and local skills,
          they become engines of jobs, industry, and energy independence for entire regions.
        </p>
      </section>

      <footer className="turbine-footer">
         Light Up Africa — A Continental Awakening
      </footer>

      <Link to="/task" className="turbine-arrow">←</Link>
    </main>
  );
}
