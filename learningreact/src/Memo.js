//useMemo hook
import React, { useState, useMemo } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);

  const doubleNumber = useMemo(() => {
    return double(number);
  }, [number]);

  const [dark, setDark] = useState(false);

  const styleTheme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={styleTheme}>{doubleNumber}</div>
    </div>
  );
};
function double(n) {
  console.log("Calling when numbr changed");
  return 2 * n;
}

export default Memo;
