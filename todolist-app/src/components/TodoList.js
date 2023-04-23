import Todo from "./Todo";
import TodoForm from "./TodoForm";
import React, { useState } from "react";

const TodoList = ({ todos, onComplete, onDelete, onEdit }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const updateTodo = (newValue) => {
    onEdit(edit.id, newValue);
    setEdit({ id: null, text: "", isCompleted: false });
  };
  const renderTodos = () => {
    if (todos.length === 0) return <div>add some todos</div>;
    return todos.map((todo) => {
      return (
        <Todo
          todos={todo}
          key={todo.id}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };
  return (
    <div>
      {edit.id ? (
        <TodoForm submitTodo={updateTodo} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};
export default TodoList;
