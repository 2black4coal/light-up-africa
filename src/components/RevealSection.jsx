// src/components/RevealSection.jsx
import React, { useRef, useEffect, useState } from "react";

export default function RevealSection({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // 20% in view
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`reveal-section ${visible ? "reveal-visible" : ""}`}
    >
      {children}
    </section>
  );
}
