import React from "react";
import { Routes, Route } from "react-router-dom";

import Gallery from "./pages/Gallery";
import LightHope from "./pages/LightHope";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Task from "./pages/Task";
import GalaxyAfricaScene from "./pages/GalaxyAfricaScene.jsx";

/* ============================================
   TASK SECTION FULL PAGES (YOUR EXACT FILES)
============================================ */
import GERD from "./pages/taskSections/GERD.jsx";
import TGD from "./pages/taskSections/TGD.jsx";

import Turbine from "./pages/taskSections/Turbine.jsx";
import Kariba from "./pages/taskSections/Kariba.jsx";
import Generation from "./pages/taskSections/Generation.jsx";
import Transmission from "./pages/taskSections/Transmission.jsx";
import Usage from "./pages/taskSections/Usage.jsx";
import Nuclear from "./pages/taskSections/Nuclear.jsx";
import ITER from "./pages/taskSections/ITER.jsx";
import Robotics from "./pages/taskSections/Robotics.jsx";
import Next from "./pages/taskSections/Next.jsx";


export default function App() {
  return (
    <Routes>
      {/* MAIN ROUTES */}
      <Route path="/" element={<GalaxyAfricaScene />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/task" element={<Task />} />
      <Route path="/lighthope" element={<LightHope />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<Policy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/disclaimer" element={<Disclaimer />} />

      {/* ============================================
          TASK SECTION FULL PAGES (NOW REAL PAGES)
      ============================================ */}
      <Route path="/task/gerd" element={<GERD />} />
      <Route path="/task/tgd" element={<TGD />} />
     
      <Route path="/task/turbine" element={<Turbine />} />
      <Route path="/task/kariba" element={<Kariba />} />
      <Route path="/task/generation" element={<Generation />} />
      <Route path="/task/transmission" element={<Transmission />} />
      <Route path="/task/usage" element={<Usage />} />
      <Route path="/task/iter" element={<ITER />} />
      <Route path="/task/next" element={<Next />} />
      <Route path="/task/nuclear" element={<Nuclear />} />
      <Route path="/task/robotics" element={<Robotics />} />
    </Routes>
  );
}
