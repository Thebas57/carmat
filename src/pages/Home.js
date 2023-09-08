import React, { useEffect, useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import Carmat from "../components/Carmat";
import { useClickContext } from "../components/ClickContext";

const Home = () => {
  const { isClick, toggleClick } = useClickContext();

  useEffect(() => {
    // Gérez le changement de fond d'écran au scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bg1 = document.getElementById("bg1");
      const bg2 = document.getElementById("bg2");
      const opacity = 1 - scrollY / window.innerHeight;

      bg1.style.opacity = opacity;
      bg2.style.opacity = 1 - opacity;
    };

    window.addEventListener("scroll", handleScroll);

    // N'oubliez pas de nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <div className="fond" id="bg1"></div>
      <div className="fond" id="bg2"></div>
      <div className="click-container">
        {!isClick ? (
          <div className="click" onClick={(e) => toggleClick()}>
            <HiCursorClick />
          </div>
        ) : null}
      </div>
      {isClick ? <Carmat /> : null}
    </div>
  );
};

export default Home;
