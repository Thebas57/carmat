import React, { useEffect, useRef } from "react";
import TypeIt from "typeit-react";
import { GrGallery, GrContactInfo } from "react-icons/gr";

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
        <span className="href">
          <GrGallery />
          <a
            href="https://stacksorted.com/links/awwwards"
            target="_blank"
            rel="noreferrer"
          >
            Galerie
          </a>{" "}
        </span>
        <span className="href">
          <GrContactInfo />
          <a
            href="https://stacksorted.com/links/awwwards"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>{" "}
        </span>
      </div>
    </div>
  );
};

export default Carmat;
