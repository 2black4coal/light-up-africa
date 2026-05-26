import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/task.css";

export default function Task() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Our Task — Light Up Africa</title>
        <meta
          name="description"
          content="Explore the mission, urgency, and responsibility behind powering Africa. This page introduces the struggle, the truth, and the movement for continental electrification."
        />
      </Helmet>

      <main className="task-wrapper">

        {/* TOP‑RIGHT ELECTRIC NAVIGATION */}
        <div className="nav-electric-right">
          <button className="electric-arrow" onClick={() => navigate('/lighthope')}>
            →
          </button>

          <button className="electric-home" onClick={() => navigate('/')}>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7" />
              <path d="M9 22V12h6v10" />
            </svg>
          </button>
        </div>

        {/* TOP SPACER */}
        <div style={{ height: "80px" }} />

        {/* PAGE TITLE */}
        <h1 className="task-title">Our Task</h1>

        {/* INTRO TEXT */}
        <div className="task-intro">
          <p><strong>Over 900 million Africans still live without reliable electricity</strong> — the largest energy gap ever recorded in human history.</p>

          <p><strong>A continent of 1.55 billion people is forced to survive on generators, diesel and candles</strong> while the rest of the world moves forward with clean, constant power.</p>

          <p><strong>Children study under choking generator fumes</strong>. Families sleep in unbearable heat. Hospitals fight to save lives in darkness. Businesses collapse every time the lights go out.</p>

          <p><strong>For decades, our suffering has been prolonged by systems built to profit from our darkness</strong> — expensive fuel, endless generator imports, and a cycle that keeps millions struggling every single night.</p>

          <p><strong>The noise of generators has become the soundtrack of African survival</strong> — a horrifying, exhausting reminder that we are paying the highest price for the lowest quality of life.</p>

          <p><strong>Africa is not powerless — Africa has been unplugged.</strong> Not by nature. Not by destiny. But by design.</p>

          <p>
            A few grow rich selling fuel into darkness.
            A few profit from delay.
            A few fear a powered Africa.
            <strong> But billions suffer for it.</strong>
          </p>

          <p>
            Africa is not poor in rivers.
            Not poor in sun.
            Not poor in wind.
            Not poor in engineers.
            <strong> Africa has been unplugged by fear, delay, and small vision.</strong>
          </p>

          <p>
            We must fight for power lines across deserts.
            Fight for turbines on rivers.
            Fight for grids across villages.
            Fight for batteries in cities.
            Fight for satellites, factories, data centers, hospitals, schools —
            <strong> fight for light in every home.</strong>
          </p>

          <p>
            Leaders must choose courage over speeches.
            Banks must choose investment over excuses.
            Companies must choose sacrifice over short-term profit.
            Engineers must build.
            Citizens must demand.
            <strong> History moves when people decide enough is enough.</strong>
          </p>

          <p>
            This is not charity.
            This is infrastructure.
            This is sovereignty.
            This is survival.
            <strong> This is Africa’s right.</strong>
          </p>

          <p>
            <strong>And now, a new generation is rising</strong> — a generation ready to fight for light, demand change, and build the Africa our children deserve.
          </p>

          <p><strong>This is the awakening. This is the struggle. This is the movement.</strong></p>
        </div>

        {/* BOTTOM NAVIGATION LINKS */}
        <div className="task-links-container">

          <div className="electric-spine"></div>

          <div className="task-links">
            <Link to="/task/gerd" className="task-link">GERD</Link>
            <Link to="/task/tgd" className="task-link">TGD</Link>
            <Link to="/task/turbine" className="task-link">TURBINE</Link>
            <Link to="/task/kariba" className="task-link">KARIBA</Link>
            <Link to="/task/generation" className="task-link">GENERATION</Link>
            <Link to="/task/transmission" className="task-link">TRANSMISSION</Link>
            <Link to="/task/usage" className="task-link">USAGE</Link>
            <Link to="/task/nuclear" className="task-link">NUCLEAR</Link>
            <Link to="/task/iter" className="task-link">ITER</Link>
            <Link to="/task/robotics" className="task-link">ROBOTICS</Link>
            <Link to="/task/next" className="task-link">NEXT</Link>
          </div>

        </div>

        {/* FOOTER */}
        <div className="task-footer">
          <div>Light Up Africa — A Continental Awakening</div>
          <div>All rights reserved.</div>
          <div>For the people. By the people. With the people.</div>
        </div>

      </main>
    </>
  );
}
