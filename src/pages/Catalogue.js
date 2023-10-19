import React, { useState } from "react";
import CatalogItem from "../components/CatalogItem";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Catalogue = () => {
  const items = [
    { imageSrc: "image1.jpg", text: "Item 1" },
    { imageSrc: "image2.jpg", text: "Item 2" },
    { imageSrc: "image2.jpg", text: "Item 2" },
    { imageSrc: "image2.jpg", text: "Item 2" },
    { imageSrc: "image2.jpg", text: "Item 2" },
    { imageSrc: "image2.jpg", text: "Item 2" },
    { imageSrc: "image2.jpg", text: "Item 2" },
    { imageSrc: "image2.jpg", text: "Item 2" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
      },
    },
  };
  const ItemMotion = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 2,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="catalogue-page"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    >
      <video autoPlay muted loop id="background-video">
        <source src="./img/haloween/fond.mp4" type="video/mp4" />
      </video>
      <div className="btn-catalogue">
        <NavLink to="/">
          <button className="btn btn-5 btn-5a icon-cart">
            <span>Accueil</span>
          </button>
        </NavLink>
      </div>
      <div className="banderol">
        <h4>
          Tous les produits sont à commander par téléphone ou se rendre sur
          place
        </h4>
      </div>
      <div className="titre">
        <h1>Catalogue</h1>
      </div>
      <motion.div
        className="catalogue-container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {items.map((item, index) => (
          <motion.div key={index} variants={ItemMotion}>
            <CatalogItem
              key={index}
              id={index}
              {...item}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Catalogue;
