import React, { useReducer } from "react";

// const ACTIONS={
//     INCREMENT: 'increment',
//     DECREMENT: 'decrement'
// }
function reducer(state, action) {
  //Takes two parameters
  //action gets what we pass in the dispatch funtion while initializing hte useREDUCER
  //state gets the initial state//reducer returns the updated state
  //if there are more than one functionality then we apply switch case in the reducer like:
  switch (action.type) {
    case "increment": //Instead of hard coding these 'increment' and 'decrement', we can declare the constants in capital letter and use them instead
      return { count: state.count + 1 }; //State updation happening here.
    case "decrement": // case: ACTIONS.DECREMENT
      // case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
  //The above pre defined actions are the only way by which we can change the state.
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); //dispatch: kind of replacement of setState function

  const increment = () => {
    dispatch({ type: "increment" }); //Similar to what happended in setState. but here we manually create a reducer fucntion that updates the state
  };
  //Also in case there is some ddata that needs to be used in state change, then we pass it as payload(ley value pair, just like type)
  const decrement = () => {
    dispatch({ type: "decrement" }); //Specifying here the type for reducer function where we have added switch case for getting the type pf operation to be performed
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{state.count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterReducer;
