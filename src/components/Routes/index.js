import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Galerie from "../../pages/Galerie";
import Catalogue from "../../pages/Catalogue";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default index;
