import React from "react";

const SwitchDayNight = ({toggleDayNight}) => {
  return (
    <div className="toggle-container">
      <label className="switch">
        <input type="checkbox" onClick={() => toggleDayNight()} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default SwitchDayNight;
