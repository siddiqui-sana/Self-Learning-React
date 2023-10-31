import React, { useState } from "react";

const Todo = () => {
  let status = "Pending";
  const [st, setStatus] = useState(status);
  const handler = () => {
    setStatus("Done");
  };
  return (
    <div>
      <ul>
        <li>Namaz</li>
        <p>{st}</p>
        <button onClick={handler}>Mark as Done</button>
        <br />
        <li>Yoga</li>
        <p>{st}</p>
        <button onClick={handler}>Mark as Done</button>
        <br />
        <li>Bath</li>
        <p>{st}</p>
        <button onClick={handler}>Mark as Done</button>
        <br />
        <li>Breakfast</li>
        <p>{st}</p>
        <button onClick={handler}>Mark as Done</button>
      </ul>
    </div>
  );
};

export default Todo;
