import React, { createContext, useContext, useState, useMemo } from 'react';

const ClickContext = createContext();

export const useClickContext = () => useContext(ClickContext);

export const ClickProvider = ({ children }) => {
  const [isClick, setIsClick] = useState(false);

  const toggleClick = () => {
    setIsClick(!isClick);
  };

  // Utilisez useMemo pour mémoriser l'objet value
  const contextValue = useMemo(() => ({ isClick, toggleClick }), [isClick]);

  return (
    <ClickContext.Provider value={contextValue}>
      {children}
    </ClickContext.Provider>
  );
};