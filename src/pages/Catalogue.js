import React, { useState } from "react";
import CatalogItem from "../components/CatalogItem";

const Catalogue = () => {
  const items = [
    { imageSrc: "image1.jpg", text: "Item 1" },
    { imageSrc: "image2.jpg", text: "Item 2" },
  ];
  return (
    <div className="catalogue-page">
      <video autoPlay muted loop id="background-video">
        <source src="./img/haloween/fond.mp4" type="video/mp4" />
      </video>
      <div className="banderol">
        <h4>
          Tous les produits sont à commander par téléphone ou se rendre sur
          place
        </h4>
      </div>
      <div className="titre">
        <h1>Catalogue</h1>
      </div>
      <div className="catalogue-container">
        {items.map((item, index) => (
          <CatalogItem key={index} {...item} />
        ))}
        <CatalogItem id={1} />
        <CatalogItem id={2} />
        <CatalogItem id={3} />
        <CatalogItem id={4} />
        <CatalogItem id={5} />
        <CatalogItem id={6} />
      </div>
    </div>
  );
};

export default Catalogue;
