import React, { useEffect, useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import Carmat from "../components/Carmat";
import { useClickContext } from "../components/ClickContext";
import BackgroundAnimation from "../components/BackgroundAnimation";

const Home = () => {
  const { isClick, toggleClick } = useClickContext();

  return (
    <div className="home">
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
