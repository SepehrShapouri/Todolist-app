import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter a todo!");
    }
    props.submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <input
            type="text"
            onChange={changeHandler}
            defaultValue={props.edit.text}
            placeholder="update todo...."
            ref={inputRef}
          />
          <button type="submit">update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            onChange={changeHandler}
            value={input}
            placeholder="add todo...."
            ref={inputRef}
          />
          <button type="submit">Add</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
