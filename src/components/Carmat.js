import React, { useEffect, useRef } from "react";
import TypeIt from "typeit-react";
import { GrGallery, GrContactInfo } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Carmat = () => {
  return (
    <div className="carmat-container">
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
          <button class="btn btn-3 btn-3d icon-cog">Galerie</button>
        </NavLink>
        <NavLink to="/contact">
          <button class="btn btn-3 btn-3d icon-cog2">Contact</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Carmat;
