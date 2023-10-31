import React from "react";

const ChildComponent = ({ clickHandler }) => {
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default ChildComponent;
