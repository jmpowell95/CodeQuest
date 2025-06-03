
import React, { createContext, useContext, useState, useEffect } from "react";

const ProgressContext = createContext();
export const useProgress = () => useContext(ProgressContext);

export function ProgressProvider({ children }) {
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem("xp")) || 0);

  useEffect(() => {
    localStorage.setItem("xp", xp);
  }, [xp]);

  const addXp = (points) => setXp(prev => prev + points);

  return (
    <ProgressContext.Provider value={{ xp, addXp }}>
      {children}
    </ProgressContext.Provider>
  );
}
