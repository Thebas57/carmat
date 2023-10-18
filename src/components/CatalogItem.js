import React, { useState } from "react";
import { Link } from "react-router-dom";

const CatalogItem = ({id}) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  const hoverClass = hover ? "hovered" : "";
  return (
    <Link
      className={`item ${hoverClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => console.log(id)}
      to={`/collection/${id}`}
    >
      <div className="img">
        <img src="./img/galerie/pdt1.jpg" alt="item" />
      </div>
      <div className="text">
        <span>Dolomia</span>
      </div>
    </Link>
  );
};

export default CatalogItem;
