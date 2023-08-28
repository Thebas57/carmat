import React, { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import Carmat from "../components/Carmat";

const Home = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="home">
      <div className="click-container">
        <div className="click" onClick={(e) => setIsClick(!isClick)}>
          <HiCursorClick />
        </div>
      </div>
      {isClick ? <Carmat /> : null}
    </div>
  );
};

export default Home;
