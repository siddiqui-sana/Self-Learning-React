import React, { useState, useCallback } from "react";
import ListToggle from "./ListToggle";

const Toggle = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    //We did not want the getItems fucntion to be called everytime the page was re rendering, so we wrapped it inside the callback function
    //Assume it to get this value from some API call
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <ListToggle getItems={getItems} />
    </div>
  );
};
export default Toggle;
