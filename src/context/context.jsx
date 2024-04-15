import { createContext, useState } from "react";

export const ContextJsx = createContext();

export const ContextProvider = ({ children }) => {
  const [width, setWidth] = useState("0%");
  const [cart, setCart] = useState([]);

  return (
    <ContextJsx.Provider value={{ width, setWidth, cart, setCart }}>
      {children}
    </ContextJsx.Provider>
  );
};
