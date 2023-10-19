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
        <img src="https://www.paris-art.com/wp-content/uploads/2019/09/penser-en-formes-et-en-couleurs-19-musee-beaux-arts-lyon-01b-Leger-320x403.jpg" alt="item" />
      </div>
      <div className="text">
        <span>Dolomia</span>
      </div>
    </Link>
  );
};

export default CatalogItem;
