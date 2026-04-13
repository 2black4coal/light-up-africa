import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/about.css";

const About = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us — Light Up Africa</title>
        <meta
          name="description"
          content="Learn about Light-Up-Africa, our mission, our purpose, and our commitment to powering every home, every city, and every future across the continent."
        />
        <meta
          name="keywords"
          content="About Light Up Africa, Africa electricity mission, African energy awareness, African development, electrification Africa"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://light-up-africa.com/about" />

        <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Light Up Africa",
      "url": "https://light-up-africa.com/about",
      "description": "Light Up Africa is a continental movement dedicated to raising awareness, accelerating electrification, and inspiring a new generation committed to powering Africa.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Light Up Africa",
        "url": "https://light-up-africa.com",
        "description": "A movement focused on energy access, awareness, and sustainable development across Africa.",
        "founder": {
          "@type": "Person",
          "name": "Frank Black — Founder & Campaign Lead"
        }
      }
    }
  `}
</script>
 <link rel="canonical" href="https://light-up-africa.com/about" />



  <meta property="og:type" content="website" />
  <meta property="og:title" content="About Us — Light Up Africa" />
  <meta property="og:description" content="Learn about the mission, leadership, and vision behind Light Up Africa — a continental movement for universal electricity access." />
  <meta property="og:url" content="https://light-up-africa.com/about" />
  <meta property="og:image" content="https://light-up-africa.com/og-home.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Us — Light Up Africa" />
  <meta name="twitter:description" content="Learn about the mission, leadership, and vision behind Light Up Africa — a continental movement for universal electricity access." />
  <meta name="twitter:image" content="https://light-up-africa.com/og-home.jpg" />




      </Helmet>

      <div className="about-page">
        <div className="about-inner">

          {/* HERO */}
          <section className="about-hero reveal">
            <h1 className="about-title">Light-Up-Africa</h1>
            <p className="about-subtitle">
              A continental campaign to power every home, every city, every future.
              <br />
              Africa must rise — and it starts with electricity.
            </p>
          </section>

          {/* CORE MESSAGE */}
          <section className="about-section reveal">
            <h2 className="about-heading">Why We Exist</h2>
            <p className="about-text">
              Millions across Africa still live in darkness while energy exists.
              This is not a lack of resources — it is a failure of systems.
              Light-Up-Africa exists to challenge that reality and mobilize a global
              push toward full electrification across the continent.
            </p>
          </section>

          {/* CAMPAIGN */}
          <section className="about-section reveal">
            <h2 className="about-heading">A Global Campaign</h2>
            <p className="about-text">
              This is a platform to inform the world, unite voices, and accelerate
              action. Governments, engineers, investors, and communities must align.
              The goal is simple: reliable, uninterrupted electricity for all.
            </p>
          </section>

          {/* HARD TRUTH */}
          <section className="about-section reveal">
            <h2 className="about-heading">Breaking the Cycle</h2>
            <p className="about-text">
              Across the continent, entire economies depend on fuel, diesel,
              and generators. This system profits from instability and keeps
              millions locked in darkness.
            </p>
            <p className="about-text">
              Light-Up-Africa calls for a transition away from dependence and toward
              sustainable, scalable energy infrastructure that serves people first.
            </p>
          </section>

          {/* IMPACT */}
          <section className="about-section reveal">
            <h2 className="about-heading">What Power Unlocks</h2>

            <ul className="about-list">
              <li>🏥 Healthcare — safe surgeries, powered hospitals</li>
              <li>🏭 Industry — manufacturing, automation, growth</li>
              <li>🎓 Education — research, learning, innovation</li>
              <li>🌾 Agriculture — irrigation and food preservation</li>
              <li>🏙️ Cities — digital economy, infrastructure</li>
              <li>🚆 Transport — electrified mobility and logistics</li>
            </ul>
          </section>

          {/* VISION */}
          <section className="about-section reveal">
            <h2 className="about-heading">Our Vision</h2>
            <p className="about-text">
              A fully electrified Africa where no community is left behind.
              Where energy is stable, accessible, and foundational to growth.
            </p>
          </section>

          {/* FUTURE */}
          <section className="about-section reveal">
            <h2 className="about-heading">What Becomes Possible</h2>
            <p className="about-text">
              With stable power, Africa can host the world — from global events
              to advanced industries. From Olympic-scale infrastructure to space
              innovation, electrification is the foundation of everything.
            </p>
            <p className="about-text">
              Power is not politics — it is oxygen for development.
            </p>
          </section>

          {/* CALL */}
          <section className="about-section reveal">
            <h2 className="about-heading">Call to Action</h2>
            <p className="about-text">
              This is a call to leaders, builders, and global partners.
              Support electrification. Invest in infrastructure.
              Help power a continent ready to lead.
            </p>
          </section>

        </div>

        {/* NAV BACK */}
        <Link to="/lighthope" className="about-next">
          <span className="arrow">←</span>
          <span className="label">Light Hope</span>
        </Link>
      </div>
    </>
  );
};

export default About;
