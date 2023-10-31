import "./App.css";
import Student from "./Student";
import LoginForm from "./LoginForm";
import Die from "./Die";
import PokeCard from "./PokeCard";
import ColorList from "./ColorList";
import ShoppingList from "./ShoppingList";
import Clicker from "./Clicker";
import Counter from "./Counter";
// import Toggler from './Toggler';
import EmojiClicker from "./EmojiClicker";
import ReactForm from "./ReactForm";
import Todo from "./Todo";
import Expense from "./Expense";
import Resource from "./Resource";
import Memo from "./Memo";
import Form from "./Form";
import CounterReducer from "./CounterReducer";
import TodoReducer from "./TodoReducer";
import Toggle from "./Toggle";
import CounterContext from "./CounterContext";
import CounterUseRef from "./CounterUseRef";
import ControlProps from "./ControlProps";

function App() {
  const getData = (name) => {
    console.log("We got data from child to parent component", name);
  };
  return (
    <div className="App">
      {/* <Student person="Sana" values={[1,2,3]}/> */}
      {/* <ColorList colors={["red","pink","teal"]}/> */}
      {/* <ShoppingList data={[{id:1, item: "Egg", number: 6, complete: true},{id: 2,item: "Chicken", number: 1, complete: false},{id: 3,item: "Rice", number: 3, status: false}]}/>
      <Clicker/> */}
      {/* <LoginForm/>  
      <Die/> */}
      {/* <PokeCard/> */}
      {/* <Counter/> */}
      {/* <Toggler/> */}
      {/* <EmojiClicker/> */}
      {/* <ReactForm/> */}
      {/* <Todo /> */}
      {/* <Expense /> */}
      {/* <Resource />
      <Memo /> */}
      {/* <Form onSubmit={getData} /> */}
      {/* <CounterReducer /> */}
      {/* <TodoReducer /> */}
      {/* <Toggle /> */}
      {/* <CounterContext /> */}
      {/* <CounterUseRef /> */}
      <ControlProps />
      <Memo />
    </div>
  );
}
export default App;
