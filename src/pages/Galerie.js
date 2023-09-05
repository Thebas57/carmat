import React, { useState } from "react";
import Carousel from "../components/Carousel";
import { motion } from "framer-motion";

const Galerie = () => {
  const images = [
    "./img/galerie/pdt1.jpg",
    "./img/galerie/pdt2.jpg",
    "./img/galerie/pdt3.jpg",
  ];

  const visuels3D = [
    "./img/galerie/visuel1.png",
    "./img/galerie/visuel2.png",
    "./img/galerie/visuel3.png",
  ];

  const [galerieSwitch, setSwitch] = useState(false);

  return (
    <motion.div
      className="galerie"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="header">
        <span
          className={
            galerieSwitch
              ? "galerie-direction"
              : "galerie-direction activedirection"
          }
          onClick={(e) => setSwitch(false)}
        >
          Nos produits
        </span>
        <span className="title">Galerie</span>
        <span
          className={
            !galerieSwitch
              ? "galerie-direction"
              : "galerie-direction activedirection"
          }
          onClick={(e) => setSwitch(true)}
        >
          Nos visuels 3D
        </span>
      </div>
      {!galerieSwitch ? (
        <Carousel images={images} type={"produits"} />
      ) : (
        <Carousel images={visuels3D} type={"visuels"} />
      )}
    </motion.div>
  );
};

export default Galerie;
