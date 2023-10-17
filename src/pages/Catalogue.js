import React from "react";

const Catalogue = () => {
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
        <div className="item">
          <div className="img">
            <img src="./img/galerie/pdt1.jpg" alt="item" />
          </div>
          <div className="text">
            <span>Dolomia</span>
          </div>
        </div>
        <div className="item">
          <div className="img">
            <img src="./img/galerie/pdt1.jpg" alt="item" />
          </div>
          <div className="text">
            <span>Dolomia</span>
          </div>
        </div>
        <div className="item">
          <div className="img">
            <img src="./img/galerie/pdt1.jpg" alt="item" />
          </div>
          <div className="text">
            <span>Dolomia</span>
          </div>
        </div>{" "}
        <div className="item">
          <div className="img">
            <img src="./img/galerie/pdt1.jpg" alt="item" />
          </div>
          <div className="text">
            <span>Dolomia</span>
          </div>
        </div>{" "}
        <div className="item">
          <div className="img">
            <img src="./img/galerie/pdt1.jpg" alt="item" />
          </div>
          <div className="text">
            <span>Dolomia</span>
          </div>
        </div>{" "}
        <div className="item">
          <div className="img">
            <img src="./img/galerie/pdt1.jpg" alt="item" />
          </div>
          <div className="text">
            <span>Dolomia</span>
          </div>
        </div>{" "}
        <div className="item">
          <div className="img">
            <img src="./img/galerie/pdt1.jpg" alt="item" />
          </div>
          <div className="text">
            <span>Dolomia</span>
          </div>
        </div>{" "}
        <div className="item">
          <div className="img">
            <img src="./img/galerie/pdt1.jpg" alt="item" />
          </div>
          <div className="text">
            <span>Dolomia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
