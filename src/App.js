import { useState } from "react";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Routes from "./components/Routes";
import Song from "./components/Song";
import SwitchDayNight from "./components/SwitchDayNight";

function App() {
  const now = new Date();
  const isDayInitial = now.getHours() >= 7 && now.getHours() < 19;
  const [isDayNight, setIsDayNight] = useState(!isDayInitial);

  const toggleDayNight = () => {
    setIsDayNight(!isDayNight);
  };

  return (
    <div className={!isDayNight ? "App day-theme" : "App night-theme"}>
      <Routes />
      <Song />
      <BackgroundAnimation />
      <SwitchDayNight toggleDayNight={toggleDayNight} isDayNight={isDayNight} />
    </div>
  );
}

export default App;
