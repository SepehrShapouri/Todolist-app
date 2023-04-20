import { useState } from "react";

const TodoForm = ({ addTodoHandler }) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter a todo!");
    }
    addTodoHandler(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={changeHandler} value={input} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
