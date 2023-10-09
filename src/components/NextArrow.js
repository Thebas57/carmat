import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NextArrow = ({onClick}) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

export default NextArrow;
