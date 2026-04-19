import React, { useEffect, useState } from "react";
import "../styles/contact.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4cc1ce25-820c-4f62-bb25-bfc9d5960b73");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message sent successfully!" : "Something went wrong. Please try again.");
  };

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
        <title>Contact Us — Light Up Africa</title>
        <meta
          name="description"
          content="Contact Light-Up-Africa for partnerships, collaborations, media inquiries, and support related to electrification and sustainable energy development across Africa."
        />
        <meta
          name="keywords"
          content="contact Light Up Africa, Africa electrification contact, African energy development, renewable energy Africa, Light-Up-Africa support"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://light-up-africa.com/contact" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Light Up Africa",
              "url": "https://light-up-africa.com/contact",
              "description": "Get in touch with Light Up Africa for inquiries, collaboration, or support.",
              "mainEntity": {
                "@type": "Organization",
                "name": "Light Up Africa",
                "url": "https://light-up-africa.com",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "email": "inquiries@light-up-africa.com",
                  "availableLanguage": ["English"]
                }
              }
            }
          `}
        </script>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us — Light Up Africa" />
        <meta property="og:description" content="Reach out to Light Up Africa for partnerships, support, or inquiries about our mission to electrify the continent." />
        <meta property="og:url" content="https://light-up-africa.com/contact" />
        <meta property="og:image" content="https://light-up-africa.com/og-home.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us — Light Up Africa" />
        <meta name="twitter:description" content="Reach out to Light Up Africa for partnerships, support, or inquiries about our mission to electrify the continent." />
        <meta name="twitter:image" content="https://light-up-africa.com/og-home.jpg" />
      </Helmet>

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

            <form className="contact-form" onSubmit={onSubmit}>
              <input type="hidden" name="access_key" value="4cc1ce25-820c-4f62-bb25-bfc9d5960b73" />

              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" required />
              </div>

              <div className="form-group">
                <label>Purpose</label>
                <select name="purpose" required>
                  <option value="">Select an option</option>
                  <option>Partnership / Collaboration</option>
                  <option>Energy Innovation</option>
                  <option>Media / Press</option>
                  <option>Support / General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" name="message" required></textarea>
              </div>

              <button type="submit" className="contact-button">
                Send Message
              </button>

              <p className="form-result">{result}</p>
            </form>
          </section>

          {/* DIRECT CONTACT */}
          <section className="contact-section reveal">
            <h2 className="contact-heading">Direct Contact</h2>
            <p className="contact-text">
              For official inquiries, partnerships, or policy-related discussions:
            </p>

            <p className="contact-email">
              inquiries@light-up-africa.com
            </p>
          </section>

          {/* MISSION BLOCK */}
          <section className="contact-section reveal">
            <h2 className="contact-heading">Why Reach Out?</h2>
            <p className="contact-text">
              Light-Up-Africa is committed to accelerating access to reliable electricity
              across underserved regions. We collaborate with innovators, organizations,
              and communities working toward sustainable energy solutions such as solar
              microgrids, decentralized systems, and infrastructure development.
            </p>
          </section>

          {/* DISCLAIMER */}
          <section className="contact-section reveal">
            <h2 className="contact-heading">Communication Notice</h2>
            <p className="contact-text small">
              By contacting Light-Up-Africa, you agree that your submitted information
              may be used to respond to your inquiry. We do not share personal information
              with third parties except as required for communication or legal purposes.
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

export default Contact;
