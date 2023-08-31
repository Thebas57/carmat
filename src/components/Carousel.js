import React, { useState } from "react";

const Carousel = ({ images, type }) => {
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
    <div className={type==="produits" ? "carousel" : "carouvisu"}>
      <button className="prevButton" onClick={goToPrevSlide}>
        &#8249;
      </button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={index === currentIndex ? "active" : ""}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
      <button className="nextButton" onClick={goToNextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
