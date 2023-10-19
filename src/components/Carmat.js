import React, { useEffect, useRef } from "react";
import TypeIt from "typeit-react";
import { RiContactsFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Carmat = () => {
  return (
    <motion.div
      className="carmat-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
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
        <NavLink to="/catalogue">
          <button className="btn btn-5 btn-5a icon-cog">
            <span>Catalogue</span>
          </button>
        </NavLink>
        <NavLink to="/contact">
          <button className="btn btn-5 btn-5a icon-cog2">
            <span>Contact</span>
          </button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Carmat;
