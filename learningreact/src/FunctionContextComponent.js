import React, { useContext } from "react";
import { ThemeContext } from "./CounterContext";

const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext); //This will pass the value from ThemeContext.Provider in the darkTheme
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC", //We are able to use the darkTheme directly using hte useContext, istead of passing it as prop.
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return <div style={themeStyles}>Function Themes</div>;
};

export default FunctionContextComponent;
