import React, { useState } from "react";
import Carousel from "../components/Carousel";

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
    <div className="galerie">
      <div className="header">
        <span className={galerieSwitch ? "galerie-direction" : "galerie-direction activedirection"} onClick={(e) => setSwitch(false)}>Nos produits</span>
        <span className="title">Galerie</span>
        <span className={!galerieSwitch ? "galerie-direction" : "galerie-direction activedirection"} onClick={(e) => setSwitch(true)}>Nos visuels 3D</span>
      </div>
      {!galerieSwitch ? (
        <Carousel images={images} type={"produits"} />
      ) : (
        <Carousel images={visuels3D} type={"visuels"} />
      )}
    </div>
  );
};

export default Galerie;
