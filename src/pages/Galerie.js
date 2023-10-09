import React, { useState } from "react";
import Carousel from "../components/Carousel";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function PrevArrow({ onClick }) {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
}

function NextArrow({ onClick }) {
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
}

const Galerie = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "./img/galerie/pdt1.jpg",
    "./img/galerie/pdt2.jpg",
    "./img/galerie/pdt3.jpg",
    "./img/galerie/pdt3.jpg",
    "./img/galerie/pdt3.jpg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <motion.div
      className="galerie"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    >
      <video autoPlay muted loop id="background-video">
        <source src="./img/haloween/fond.mp4" type="video/mp4" />
      </video>
      <div className="btn-galerie">
        <NavLink to="/">
          <button className="btn btn-5 btn-5a icon-cart">
            <span>Accueil</span>
          </button>
        </NavLink>
      </div>
      <div className="slide-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={index === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img src={image} alt={index} />
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Galerie;
