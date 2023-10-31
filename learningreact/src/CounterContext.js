import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = React.createContext();

const CounterContext = () => {
  const [darkTheme, setDarkTheme] = useState("true");

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        {/* Whenever the darkTheme changes, then the descendent components will get re rendered */}
        {/* darkTheme (anything passed in value) will be accessed by all components wrapped inside the Provider of Context */}
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
};

export default CounterContext;
