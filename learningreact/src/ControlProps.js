import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
const ControlProps = () => {
  //This is the parent component
  const [message, setMessage] = useState("");
  const handleClick = () => {
    console.log("This button was clicked");
    setMessage("This button was clicked");
  };
  return (
    <>
      <div>{message}</div>
      <ChildComponent clickHandler={handleClick} />
    </>
  );
};

export default ControlProps;
