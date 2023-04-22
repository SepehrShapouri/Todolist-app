import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos,newTodo])
  };
  const onComplete = (id)=>{
    const index = todos.findIndex(item =>parseInt(item.id) === parseInt(id))
    const allTodos = [...todos]
    const todo = allTodos[index]
    todo.isCompleted = !todo.isCompleted
    allTodos[index] = todo
    setTodos(allTodos)
    console.log(todo)
  }
  const onDelete = (id)=>{
    const allTodos = [...todos]
    const filteredTodos = allTodos.filter(todo =>{
        return parseInt(todo.id) != parseInt(id)
    })
    setTodos(filteredTodos)
  }
  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler}/>
      <TodoList todos={todos} onComplete={onComplete} onDelete={onDelete}/>
    </div>
  );
};

export default TodoApp;
