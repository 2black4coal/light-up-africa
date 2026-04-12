import React, { useEffect } from "react";
import "../styles/contact.css";

const Contact = () => {

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
    <div className="contact-page">
      <div className="contact-inner">

        {/* HERO */}
        <section className="contact-hero reveal">
          <h1 className="contact-title">Contact Light-Up-Africa</h1>
          <p className="contact-subtitle">
            Advancing electrification across Africa requires collaboration.
            Whether you're an innovator, organization, or supporter — your voice matters.
          </p>
        </section>

        {/* FORM */}
        <section className="contact-section reveal">
          <h2 className="contact-heading">Send a Message</h2>

          <form className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" required />
            </div>

            <div className="form-group">
              <label>Purpose</label>
              <select required>
                <option value="">Select an option</option>
                <option>Partnership / Collaboration</option>
                <option>Energy Innovation</option>
                <option>Media / Press</option>
                <option>Support / General Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" required />
            </div>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </section>

        {/* DIRECT CONTACT */}
        <section className="contact-section reveal">
          <h2 className="contact-heading">Direct Contact</h2>
          <p className="contact-text">
            For official inquiries, partnerships, or policy-related discussions:
          </p>

          <p className="contact-email">
            policies@lightupafrica.org
          </p>
        </section>

        {/* MISSION BLOCK (ADSENSE TRUST BOOST) */}
        <section className="contact-section reveal">
          <h2 className="contact-heading">Why Reach Out?</h2>
          <p className="contact-text">
            Light-Up-Africa is committed to accelerating access to reliable electricity
            across underserved regions. We collaborate with innovators, organizations,
            and communities working toward sustainable energy solutions such as solar
            microgrids, decentralized systems, and infrastructure development.
          </p>
        </section>

        {/* DISCLAIMER (VERY IMPORTANT FOR ADSENSE) */}
        <section className="contact-section reveal">
          <h2 className="contact-heading">Communication Notice</h2>
          <p className="contact-text small">
            By contacting Light-Up-Africa, you agree that your submitted information
            may be used to respond to your inquiry. We do not share personal information
            with third parties except as required for communication or legal purposes.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Contact;