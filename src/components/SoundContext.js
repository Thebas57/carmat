import React, { createContext, useContext, useState, useMemo } from "react";

const SoundContext = createContext();

export const useClickContext = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
  const [isSound, setIsSound] = useState(false);

  const toggleSound = () => {
    setIsSound(!isSound);
  };

  // Utilisez useMemo pour mémoriser l'objet value
  const contextValue = useMemo(() => ({ isSound, toggleSound }), [isSound]);

  return (
    <SoundContext.Provider value={contextValue}>
      {children}
    </SoundContext.Provider>
  );
};
