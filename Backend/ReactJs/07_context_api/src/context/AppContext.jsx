import { Children, createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    theme: "light",
  });

  const toggleTheme = () => {
    setState((prev) => ({
      ...prev,
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  return (
    <AppContext.Provider value={{ state, setState, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
