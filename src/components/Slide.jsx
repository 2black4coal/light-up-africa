import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/slide.css";

export default function Slide({ slide }) {
  if (!slide?.image) return null;

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="slide-cinema"
      style={{ backgroundImage: `url(${slide.image})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3.5, ease: "easeInOut" }}
    >
      {showText && slide.text && (
        <motion.p
          className="slide-cinema-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          {slide.text}
        </motion.p>
      )}
    </motion.div>
  );
}
