import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { TfiArrowsVertical, TfiArrowsHorizontal } from "react-icons/tfi";

import Popup from "../components/Popup";
import VanillaTilt from "vanilla-tilt";

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

const CollectionItem = ({ id }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [okOpen, setOkOpen] = useState(0);

  const images = [
    {
      id: 1,
      description: "Image 1",
      src: "./../img/galerie/pdt1.jpg",
    },
    {
      id: 2,
      description: "Image 2",
      src: "./../img/galerie/pdt2.jpg",
    },
    {
      id: 3,
      description: "Image 3",
      src: "./../img/galerie/pdt3.jpg",
    },
    {
      id: 3,
      description: "Image 3",
      src: "./../img/galerie/pdt3.jpg",
    },
    {
      id: 3,
      description: "Image 3",
      src: "./../img/galerie/pdt3.jpg",
    },
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
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    afterChange: (current, next) => setOkOpen(current),
  };

  const handleSlideClick = (index, e) => {
    // Ouvrir le Popup avec l'index de la diapositive
    if (index === imageIndex && okOpen === imageIndex) {
      setIsOpenPopup(true);
      e.stopPropagation(); // Arrêter la propagation de l'événement
    }
  };

  useEffect(() => {
    let popup = null;
    if (isOpenPopup) popup = document.querySelector(".popup");
    // Ajoutez un écouteur d'événements pour les clics sur l'ensemble de la page
    const handleOutsideClick = (e) => {
      // Vérifiez si le clic a été effectué en dehors du Popup
      if (popup && !popup.contains(e.target) && isOpenPopup) {
        // Fermez le Popup en appelant la fonction onClose
        setIsOpenPopup(false);
      }
    };

    // Ajoutez l'écouteur d'événements lors de l'ouverture du Popup
    if (isOpenPopup) document.addEventListener("click", handleOutsideClick);

    // Sélectionnez la diapositive active
    const activeSlide = document.querySelector(".slide.activeSlide");

    // Si une diapositive active est trouvée, initialisez l'effet Vanilla Tilt
    if (activeSlide) {
      console.log(activeSlide, imageIndex);
      VanillaTilt.init(activeSlide, {
        max: 25,
        speed: 400,
      });
    }

    // Nettoyez l'écouteur d'événements lors de la fermeture du Popup
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      if (activeSlide) {
        activeSlide.vanillaTilt.destroy();
      }
    };
  }, [isOpenPopup, imageIndex]);

  return (
    <motion.div
      className="collection-item"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="slide-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              id={index}
              className={index === imageIndex ? "slide activeSlide" : "slide"}
              //onClick={(e) => handleSlideClick(index, e)} // Appeler la fonction avec l'index
            >
              <img
                src="https://www.paris-art.com/wp-content/uploads/2019/09/penser-en-formes-et-en-couleurs-19-musee-beaux-arts-lyon-01b-Leger-320x403.jpg"
                alt="item"
              />
            </div>
          ))}
        </Slider>
        <h2>Stromboli</h2>
      </div>
      <div className="text-left">
        <p>
          FIO.GHIAIA, la collection élaborée par Luigi Romanelli pour FIO.,
          donne naissance à un récit de pierres qui deviennent une roche de
          valeur et qui, de petits cailloux, se transforment en éclats d’une
          pierre importante telle que le marbre.
        </p>
      </div>
      <div className="indication-carrelage">
        <div className="container-square">
          <div className="square">45 x 45</div>

          <div className="arrow-right">
            <TfiArrowsVertical />
          </div>
          <div className="arrow-bottom">
            <TfiArrowsHorizontal />
          </div>
        </div>
        <p className="">Lorem ipsum dolor sit amet, consectetuer adi</p>
      </div>
      {isOpenPopup && <Popup image={images[imageIndex]} />}
    </motion.div>
  );
};

export default CollectionItem;
