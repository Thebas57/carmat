import React from "react";
import { NavLink, useParams } from "react-router-dom";
import CollectionItem from "../components/CollectionItem";

const Collection = () => {
  const { id } = useParams();
  return (
    <div className="collection-page">
      <video autoPlay muted loop id="background-video">
        <source src="./../img/haloween/fond.mp4" type="video/mp4" />
      </video>
      <CollectionItem id={id} />
      <div className="btn-galerie">
        <NavLink to="/catalogue">
          <button className="btn btn-5 btn-5a icon-cart">
            <span>Galerie</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Collection;
