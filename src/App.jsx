import React from "react";
import { Routes, Route } from "react-router-dom";
//import LandingPage from "./pages/LandingPage";
import Gallery from "./pages/Gallery";
import LightHope from "./pages/LightHope";

import Task from "./pages/Task";
import GalaxyAfricaScene from "./pages/GalaxyAfricaScene.jsx";
export default function App() {
  return (
    <Routes>
     
   
      <Route path="/" element={<GalaxyAfricaScene />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/task" element={<Task />} />
      <Route path="/lighthope" element={<LightHope />} />
      
    </Routes>
  );
}
// <Route path="/" element={<LandingPage />} />