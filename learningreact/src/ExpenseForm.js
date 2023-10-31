//Handling the user input and form submission
//useState
import React, { useState } from "react";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    expense: "",
    date: "",
  });

  const titleEventHandler = (event) => {
    setUserInput((prevState) => {
      console.log(event.target.value);
      return { ...prevState, title: event.target.value };
    });
  };
  const priceEventHandler = (event) => {
    setUserInput((prevState) => {
      console.log(event.target.value);
      return { ...prevState, expense: event.target.value };
    });
  };
  const dateEventHandler = (event) => {
    setUserInput((prevState) => {
      //Use this format if current State depends on previosus state
      console.log(event.target.value);
      return { ...prevState, date: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault(); //We do this, because by default it is browsers property to refreash page when submit button is clicked, so all data will be cleared, but we want to create object from the input data.
    const newObj = {
      title: userInput.title,
      expense: userInput.expense,
      date: userInput.date,
    };
    console.log(newObj);

    setUserInput({
      //For two way Binding, so after a click on submit, the page won't refresh, but the values from input field will vanish
      title: "",
      expense: "",
      date: "",
    });
    console.log(userInput);
    return newObj;
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Title"
        onChange={titleEventHandler}
        value={userInput.title} //For two way binding
      />
      <input
        type="number"
        placeholder="price"
        onChange={priceEventHandler}
        value={userInput.expense}
      />
      <input
        type="date"
        placholder="date"
        onChange={dateEventHandler}
        value={userInput.date}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
