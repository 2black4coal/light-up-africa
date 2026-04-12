import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/policy.css";

const PrivacyPolicy = () => {

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
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-subtitle">
            Light-Up-Africa is committed to transparency, accountability, and the responsible
            handling of information as we advocate for electrification across Africa.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and message
            content when you contact us. We also collect non-personal data such as browser type,
            device information, and usage patterns to improve our platform.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>How We Use Information</h2>
          <p>
            Information collected is used to respond to inquiries, improve user experience,
            support communication efforts, and strengthen awareness initiatives related to
            energy access and electrification across African communities.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Cookies and Advertising</h2>
          <p>
            Light-Up-Africa uses cookies to enhance user experience. Third-party vendors,
            including Google, use cookies to serve ads based on a user’s prior visits to this
            website or other websites.
          </p>
          <p>
            Google’s use of advertising cookies enables it and its partners to serve ads to users
            based on their visit to this site and/or other sites on the Internet.
          </p>
          <p>
            Users may opt out of personalized advertising by visiting Google Ads Settings.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Third-Party Privacy Policies</h2>
          <p>
            Light-Up-Africa’s Privacy Policy does not apply to other advertisers or websites.
            We advise you to consult the respective Privacy Policies of third-party ad servers
            for more detailed information.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Data Protection Commitment</h2>
          <p>
            We take appropriate measures to protect your information. Our platform is built
            with integrity and respect for all users engaging in the mission to power Africa.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Children’s Information</h2>
          <p>
            Light-Up-Africa does not knowingly collect any Personal Identifiable Information
            from children under the age of 13.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Government & Public Interest Mission</h2>
          <p>
            Light-Up-Africa exists to raise awareness and support the advancement of
            electrification initiatives across Africa, including engagement with national
            frameworks and public infrastructure efforts such as those aligned with FRCN.
            Our platform promotes transparency, collaboration, and responsible communication
            in support of sustainable development.
          </p>
        </section>

        <section className="policy-section reveal">
          <h2>Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
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

export default PrivacyPolicy;