import React from "react";
import "./../styles/logocarousel.css";

import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";
import logo9 from "../assets/logos/logo9.png";
import logo10 from "../assets/logos/logo10.png";
import logo11 from "../assets/logos/logo11.png";
import logo12 from "../assets/logos/logo12.png";
import logo13 from "../assets/logos/logo13.png";
import logo14 from "../assets/logos/logo14.png";
import logo15 from "../assets/logos/logo15.png";
import logo16 from "../assets/logos/logo16.png";
import logo17 from "../assets/logos/logo17.png";
import logo18 from "../assets/logos/logo18.png";
import logo19 from "../assets/logos/logo19.png";
import logo20 from "../assets/logos/logo20.png";
import logo21 from "../assets/logos/logo21.png";
import logo22 from "../assets/logos/logo22.png";
import logo23 from "../assets/logos/logo23.png";
import logo24 from "../assets/logos/logo24.png";
import logo25 from "../assets/logos/logo25.png";
import logo26 from "../assets/logos/logo26.png";



export default function LogoCarousel() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16  , logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24 , logo25, logo26];

  return (
    <div className="logo-carousel-root">
      <div className="logo-track">
        {logos.concat(logos).map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
