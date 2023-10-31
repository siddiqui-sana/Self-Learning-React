import React from "react";

const Tododo = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: "toggle_todo", payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch({ type: "delete_todo", payload: { id: todo.id } });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Tododo;
