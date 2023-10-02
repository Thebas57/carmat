import React, { useEffect, useState } from "react";

function BackgroundAnimation() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fonction de gestionnaire de scroll
    const handleScroll = (event) => {
      const background = document.querySelector(".background");
      const img1 = document.querySelector(".img1");
      const img2 = document.querySelector(".img2");

      // Déterminez la direction du défilement de la roulette de la souris
      const scrollDirection = event.deltaY > 0 ? 1 : -1;

      //Si on scrolll vers le bas, on augmente l'opacité
      if (scrollDirection > 0) {
        setOpacity(opacity + 0.1);
      } else {
        setOpacity(opacity - 0.1);
      }

      // Réglez l'opacité des images de fond en fonction de la position de défilement
      img1.style.opacity = 1 - opacity;
      img2.style.opacity = opacity;

      // Changez de classe pour changer d'image de fond lorsque le défilement atteint le bas
      if (opacity >= 0.9) {
        background.classList.add("img2");
      } else {
        background.classList.remove("img2");
      }
    };

    // Ajoutez un écouteur d'événements de scroll lorsque le composant est monté
    window.addEventListener("wheel", handleScroll);

    // Nettoyez l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [opacity]);

  return (
    <div className="background">
      <div className="background-image img2"></div>
      <div className="background-image img1"></div>
    </div>
  );
}

export default BackgroundAnimation;
