import React, { useEffect, useRef } from "react";
import TypeIt from "typeit-react";
import { GrGallery, GrContactInfo } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Carmat = () => {
  return (
    <motion.div
      className="carmat-container"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="carmat">
        <TypeIt
          options={{ speed: 50 }}
          // autoStart = "true"
          getBeforeInit={(instance) => {
            instance
              .type(
                "Carmat est une entreprise spécialisée dans le carrelage.",
                { speed: 100 }
              )
              .break()
              .pause(500)
              .type("Elle est située à Nancy.")
              .break()
              .pause(500)
              .type("Le siège social se situe à Ludres.");

            // Remember to return it!
            return instance;
          }}
        />
      </div>
      <div className="direction">
        <NavLink to="/galerie">
          <button className="btn btn-3 btn-3d icon-cog">Galerie</button>
        </NavLink>
        <NavLink to="/contact">
          <button className="btn btn-3 btn-3d icon-cog2">Contact</button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Carmat;
