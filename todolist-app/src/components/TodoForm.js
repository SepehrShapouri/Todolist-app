import { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={changeHandler} value={todo} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
