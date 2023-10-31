import React, { useReducer, useState } from "react";
import Tododo from "./Tododo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle_todo", //For completing or uncompleting a todo
  DELETE_TODO: "delete_todo",
};

function reducer(todos, action) {
  //todos gets the initial value of todos, the action gets all parameter passed while calling the reducer function i.e. in dispatch
  //state, action. Here todos/state is an array of objects
  //In action we get a dictionary, of keys: action and payload.
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, complete: !todo.complete };
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

const TodoReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []); //dispatch: kind of replacement of setState function
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } }); //Payload is the actual data on which the action gets perfored. The pointer goes to the reducer fucntion created above
    setName(""); //Clears out the name that was written in input box
  };
  console.log(todos);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
      {todos.map((todo) => {
        return <Tododo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
};

export default TodoReducer;
