import { useState, useContext, createContext } from "react";
import ThemeContext from "./ThemeContext";
const UseContextHook = () => {
 
 
  let { theme, themeToggle } = useContext(ThemeContext);
  
  return (
    <div
      style={{
        background: theme == "dark" ? "#333" : "#fff",
        color: theme == "dark" ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Current Theme:{theme}</h2>
      <button onClick={themeToggle}>Toggle Theme</button>
    </div>
  );
};

export default UseContextHook;
