import { motion } from "framer-motion";
import React, { useState } from "react";

const Carousel = ({ images, type }) => {
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
  const Item = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div
      className={type === "produits" ? "carousel" : "carouvisu"}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <button className="prevButton" onClick={goToPrevSlide}>
        &#8249;
      </button>
      {images.map((image, index) => (
        <motion.div className="div-carou" key={index} variants={Item}>
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          />
        </motion.div>
      ))}
      <button className="nextButton" onClick={goToNextSlide}>
        &#8250;
      </button>
    </motion.div>
  );
};

export default Carousel;
