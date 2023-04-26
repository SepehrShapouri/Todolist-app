import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Navbar from "./Navbar";
import Filter from "./Filter";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos,setFilterTodos] = useState([])
  const [status,setStatus] = useState("All")
  useEffect(()=>{
    filterTodos(status)
  },[todos,status])
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
  const filterTodos = (status)=>{
    switch(status){
      case "All": setFilterTodos(todos)
      break;
      case "Completed":setFilterTodos(todos.filter(todo => todo.isCompleted))
      break;
      case "unCompleted" :setFilterTodos(todos.filter(todo=>!todo.isCompleted))
      break
      default : setFilterTodos(todos)
    }
  }
  const changeHandler = (e)=>{
    setStatus(e.value)
    filterTodos(e.value)
}
  return (
    <div className="container">
      <div className="contentHolder">
      <Navbar value={todos} />
      <Filter todos={todos} filterTodos={filterTodos} changeHandler={changeHandler}/>
      </div>
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete={onComplete}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
};

export default TodoApp;
