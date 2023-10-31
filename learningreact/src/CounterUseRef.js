import React, { useRef, useState } from "react";

const CounterUseRef = () => {
  const ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(ref.current); //We don't want to re render the page when the cutton is clisked, just need to count in backgroud. And since the page isn't getting re rendered using useRef, we cannot display the updating values of current without page re rendering.
  };
  return (
    <>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
};

export default CounterUseRef;
