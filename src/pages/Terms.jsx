import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/policy.css";

const Terms = () => {

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

        <section className="policy-hero reveal">
          <h1 className="policy-title">Terms & Conditions</h1>
          <p className="policy-subtitle">
            These terms govern your use of Light-Up-Africa as we work toward a
            future of reliable electrification across the African continent.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound
            by these Terms and Conditions. If you do not agree, please do not use
            this site.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Use of the Website</h2>
          <p>
            This platform is intended for informational, educational, and awareness
            purposes related to electrification, energy access, and development across Africa.
            You agree to use this website responsibly and not for unlawful or harmful activities.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Intellectual Property</h2>
          <p>
            All content on Light-Up-Africa, including text, design, branding, and media,
            is the property of the platform unless otherwise stated. Unauthorized use,
            reproduction, or distribution is prohibited.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>User Contributions</h2>
          <p>
            If you submit content or contact us, you grant Light-Up-Africa the right
            to review and respond to your communication. You agree not to submit
            false, misleading, or harmful information.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Third-Party Links & Advertising</h2>
          <p>
            This website may include links to third-party websites or display
            advertisements served by partners such as Google. We do not control
            external sites and are not responsible for their content or practices.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Limitation of Liability</h2>
          <p>
            Light-Up-Africa provides content for general informational purposes.
            We make no guarantees regarding accuracy, completeness, or reliability.
            Use of this site is at your own risk.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Mission Alignment</h2>
          <p>
            This platform exists to support awareness and dialogue around
            electrification efforts across Africa, including public infrastructure
            development and national initiatives aligned with frameworks such as FRCN.
            Content is intended to inform and inspire—not to represent official policy positions.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Modifications</h2>
          <p>
            We reserve the right to update or modify these Terms at any time.
            Continued use of the site after changes constitutes acceptance of those changes.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Governing Principle</h2>
          <p>
            These Terms are guided by principles of transparency, fairness, and
            responsible communication in support of global development and access to energy.
          </p>
        </section>

      </div>

      {/* 🔥 SAME NAV FLOW */}
      <Link to="/lighthope" className="policy-next">
        <span className="arrow">←</span>
        <span className="label">Light Hope</span>
      </Link>
    </div>
  );
};

export default Terms;