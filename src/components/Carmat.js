import React, { useEffect, useRef } from "react";
import TypeIt from "typeit";

const Carmat = () => {
  const simpleUsageRef = useRef(null);

  useEffect(() => {
    if (simpleUsageRef.current) {
      new TypeIt(simpleUsageRef.current, {
        strings: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
        speed: 50,
        waitUntilVisible: true,
      }).go();
    }
  }, []);

  return (
    <div className="carmat-container">
      <div className="carmat">
        Carmat est une entreprise spécialisée dans le carrelage située à Nancy.
        Le siège social se situe à Ludres. gnagnagna
        <p ref={simpleUsageRef}></p>
      </div>
    </div>
  );
};

export default Carmat;
