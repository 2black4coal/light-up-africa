import React from "react";
import "../styles/a.css";

import s1 from "../assets/images/sec2/s1.jpg";
import s2 from "../assets/images/sec2/s2.jpg";

export default function Sec2() {
  return (
    <section className="layout-45 sec2">

      {/* ROW 1 */}
      <div className="row">
        <div
          className="image"
          style={{ backgroundImage: `url(${s1})` }}
        />
        <div className="text">
          <p>
            <strong>The Three Gorges Dam</strong> has an installed capacity of 22,500 megawatts, powered by
            32 main turbines rated at 700 megawatts each, along with two smaller units.
          </p>
          <p>
            It uses advanced Francis turbines designed for high-flow, medium-head hydroelectric generation.
            Water drops through the penstocks, striking the turbine blades with immense force and converting
            gravitational energy into rotational motion that drives massive generators.
          </p>
          <p>
            On average, the facility produces around 100 terawatt-hours of electricity annually — enough to
            supply tens of millions of homes while sharply reducing dependence on fossil fuels.
          </p>
          <p>
            The construction required an investment estimated between $25 billion and $35 billion, covering
            civil works, turbines, transmission lines, worker housing, and environmental studies.
          </p>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="row reverse">
        <div
          className="image"
          style={{ backgroundImage: `url(${s2})` }}
        />
        <div className="text">
          <p>
            Over the 10–15 years of construction and phased commissioning, the project created more than
            20,000–40,000 jobs, including engineers, welders, electricians, and heavy-equipment operators.
          </p>
          <p>
            Beyond wages, the project delivered major labor benefits: workers gained high-value technical
            skills, long-term employability, and experience in large-scale infrastructure. Local economies
            grew through increased commerce, transportation demand, and service jobs.
          </p>
          <p>
            <strong>Lesson for Africa:</strong> With strategic planning, engineering discipline, and decisive
            leadership, Africa’s rivers can power cities, industries, and rural communities. Hydropower is
            not just electricity — it is a pathway to jobs, stability, and long-term prosperity.
          </p>
        </div>
      </div>

    </section>
  );
}