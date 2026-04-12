import React from "react";
import { Routes, Route } from "react-router-dom";
//import LandingPage from "./pages/LandingPage";
import Gallery from "./pages/Gallery";
import LightHope from "./pages/LightHope";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";

import Task from "./pages/Task";
import GalaxyAfricaScene from "./pages/GalaxyAfricaScene.jsx";
export default function App() {
  return (
    <Routes>
     
   
      <Route path="/" element={<GalaxyAfricaScene />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/task" element={<Task />} />
      <Route path="/lighthope" element={<LightHope />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<Policy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      
    </Routes>
  );
}
// <Route path="/" element={<LandingPage />} />