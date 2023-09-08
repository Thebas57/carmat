import React, { useRef, useState } from "react";
import { PiMusicNotesSimpleFill } from "react-icons/pi";

const Song = () => {
  const ref = useRef(null);
  const [playSong, setPLaySong] = useState(false);

  const toggleSong = () => {
    setPLaySong(!playSong);

    if (!playSong) ref.current.play();
    else ref.current.pause();
  };
  return (
    <div className="song" onClick={(e) => toggleSong()}>
      {!playSong ? (
        <PiMusicNotesSimpleFill />
      ) : (
        <div>
          <span className={playSong ? "line running" : "line"}></span>
          <span className={playSong ? "line running" : "line"}></span>
          <span className={playSong ? "line running" : "line"}></span>
          <span className={playSong ? "line running" : "line"}></span>
          <span className={playSong ? "line running" : "line"}></span>
        </div>
      )}
      <audio src="./song/song-carrelage.mp3" ref={ref} loop></audio>
    </div>
  );
};

export default Song;
