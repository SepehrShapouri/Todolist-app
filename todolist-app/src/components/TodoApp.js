import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const onComplete = (id) => {
    const index = todos.findIndex((item) => parseInt(item.id) === parseInt(id));
    const allTodos = [...todos];
    const todo = { ...allTodos[index] };
    todo.isCompleted = !todo.isCompleted;
    allTodos[index] = todo;
    setTodos(allTodos);
    console.log(todo);
  };
  const onDelete = (id) => {
    const allTodos = [...todos];
    const filteredTodos = allTodos.filter((todo) => {
      return parseInt(todo.id) != parseInt(id);
    });
    setTodos(filteredTodos);
  };
  const onEdit = (id, newValue) => {
    const index = todos.findIndex((item) => parseInt(item.id) === parseInt(id));
    const allTodos = [...todos];
    const todo = allTodos[index];
    todo.text = newValue;
    allTodos[index] = todo;
    setTodos(allTodos);
  };
  return (
    <div className="container">
      <Navbar value={todos} />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
};

export default TodoApp;
