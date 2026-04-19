import React, { useEffect, useState } from "react";
import "../styles/contact.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset(); // clear form
      } else {
        setResult(data.message || "❌ Something went wrong.");
      }

    } catch (error) {
      console.error(error);
      setResult("❌ Network error. Try again.");
    }
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
      </Helmet>

      <div className="contact-page">
        <div className="contact-inner">

          <section className="contact-hero reveal">
            <h1 className="contact-title">Contact Light-Up-Africa</h1>
          </section>

          <section className="contact-section reveal">
            <h2 className="contact-heading">Send a Message</h2>

            <form className="contact-form" onSubmit={onSubmit}>

              {/* ✅ KEEP ONLY THIS (no JS append anymore) */}
              <input type="hidden" name="access_key" value="4cc1ce25-820c-4f62-bb25-bfc9d5960b73" />

              {/* ✅ IMPORTANT */}
              <input type="hidden" name="subject" value="New Light-Up-Africa Contact Message" />

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

          <section className="contact-section reveal">
            <h2 className="contact-heading">Direct Contact</h2>
            <p className="contact-email">
              inquiries@light-up-africa.com
            </p>
          </section>

        </div>

        <Link to="/lighthope" className="about-next">
          ← Light Hope
        </Link>
      </div>
    </>
  );
};

export default Contact;