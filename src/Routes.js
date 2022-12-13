import React from "react";
import Wwwcarnivorecamaraderie from "pages/Wwwcarnivorecamaraderie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wwwcarnivorecamaraderie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
