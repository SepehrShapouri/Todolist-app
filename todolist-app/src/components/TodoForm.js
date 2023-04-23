import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
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
      <div className="formControl">
      <input
        type="text"
        onChange={changeHandler}
        value={input}
        placeholder={props.edit ? "update todo..." : "add todo..."}
        ref={inputRef}
      />
      <button className={`btn ${props.edit ? "update":"add"}`} type="submit">{props.edit ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default TodoForm;
