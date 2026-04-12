import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/policy.css";

const Disclaimer = () => {

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
    <div className="policy-page">
      <div className="policy-inner">

        {/* HERO */}
        <section className="policy-hero reveal">
          <h1 className="policy-title">Disclaimer</h1>
          <p className="policy-subtitle">
            Light-Up-Africa is an independent platform dedicated to raising awareness
            about electrification and energy access across Africa. This disclaimer
            outlines the limitations of our responsibility and the scope of our content.
          </p>
        </section>

        {/* GENERAL INFO */}
        <section className="policy-section reveal">
          <h2>General Information</h2>
          <p>
            All information on this website is published in good faith and for general
            informational and educational purposes only. While we strive to ensure
            accuracy and relevance, Light-Up-Africa makes no warranties regarding the
            completeness, reliability, or accuracy of any content.
          </p>
        </section>

        {/* NO PROFESSIONAL ADVICE */}
        <section className="policy-section reveal">
          <h2>No Professional Advice</h2>
          <p>
            The content provided on this platform does not constitute professional,
            technical, engineering, legal, or financial advice. Any decisions or actions
            taken based on the information provided are strictly at your own risk.
          </p>
        </section>

        {/* ENERGY / INFRA DISCLAIMER */}
        <section className="policy-section reveal">
          <h2>Energy & Infrastructure Content</h2>
          <p>
            Discussions related to electrification, energy systems, infrastructure,
            and development initiatives are presented for awareness and informational
            purposes only. Light-Up-Africa does not guarantee the performance,
            availability, or outcomes of any technologies, projects, or solutions referenced.
          </p>
        </section>

        {/* EXTERNAL LINKS */}
        <section className="policy-section reveal">
          <h2>External Links</h2>
          <p>
            This website may contain links to external websites or resources. While we
            aim to include relevant and ethical sources, we have no control over the
            content, policies, or practices of third-party websites and assume no
            responsibility for them.
          </p>
        </section>

        {/* ADSENSE */}
        <section className="policy-section reveal">
          <h2>Advertising & Third-Party Services</h2>
          <p>
            This website may display advertisements and use third-party services,
            including those provided by Google. These services may use cookies,
            web beacons, or similar technologies to deliver personalized or
            non-personalized advertisements based on user activity.
          </p>
        </section>

        {/* NO GOV AFFILIATION */}
        <section className="policy-section reveal">
          <h2>No Government Affiliation</h2>
          <p>
            Light-Up-Africa is an independent initiative and is not affiliated with,
            endorsed by, or officially connected to any government, public authority,
            or institutional body. Any references to national infrastructure,
            electrification programs, or development efforts are made solely for
            informational and awareness purposes.
          </p>
        </section>

        {/* LIABILITY */}
        <section className="policy-section reveal">
          <h2>Limitation of Liability</h2>
          <p>
            Under no circumstances shall Light-Up-Africa be held liable for any loss
            or damage, including indirect or consequential loss, arising from the use
            of this website or reliance on its content.
          </p>
        </section>

        {/* USER RESPONSIBILITY */}
        <section className="policy-section reveal">
          <h2>User Responsibility</h2>
          <p>
            By using this website, you acknowledge that you are responsible for your
            own decisions and actions. You agree to evaluate the accuracy and usefulness
            of any information before relying on it.
          </p>
        </section>

        {/* CONSENT */}
        <section className="policy-section reveal">
          <h2>Consent</h2>
          <p>
            By using this website, you hereby consent to this disclaimer and agree
            to its terms.
          </p>
        </section>

        {/* UPDATES */}
        <section className="policy-section reveal">
          <h2>Updates</h2>
          <p>
            We reserve the right to update, amend, or change this Disclaimer at any time
            without prior notice. Continued use of the website constitutes acceptance
            of any updates.
          </p>
        </section>

      </div>

      {/* 🔥 SAME CINEMATIC EXIT */}
      <Link to="/lighthope" className="policy-next">
        <span className="arrow">←</span>
        <span className="label">Light Hope</span>
      </Link>
    </div>
  );
};

export default Disclaimer;