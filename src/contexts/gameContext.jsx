import { createContext, useState } from "react";
const GameContext = createContext({});

export const GameProvider = ({ children }) => { 
  const [load, setLoad] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loadinColor, setLoadinColor] = useState("red");

  return (
    <GameContext.Provider value={{
      load,
      setLoad,
      isMobile,
      setIsMobile,
      loadinColor,
      setLoadinColor
    }} >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;