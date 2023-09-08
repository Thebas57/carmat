import React, { useEffect, useState } from 'react';

function BackgroundAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [showSecondBackground, setShowSecondBackground] = useState(false);

  useEffect(() => {
    // Fonction de gestionnaire de scroll
    const handleScroll = (event) => {
      console.log(event)
      setScrollY(window.scrollY);

      // Ajoutez une condition pour déterminer quand afficher le deuxième fond d'écran
      if (event.deltaY > 0) {
        setShowSecondBackground(true);
      } else {
        setShowSecondBackground(false);
      }
    };

    // Ajoutez un écouteur d'événements de scroll lorsque le composant est monté
    window.addEventListener('wheel', handleScroll);

    // Nettoyez l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="background-animation-container">
      {/* Le fond d'écran initial */}
      <div className={`background-initial ${scrollY > 200 ? 'hide-background' : ''}`} />
      {/* Le deuxième fond d'écran avec animation */}
      <div className={`background-second ${showSecondBackground ? 'show-background' : ''}`} />
      <div className="content">
        {/* Le contenu de votre page */}
      </div>
    </div>
  );
}

export default BackgroundAnimation;