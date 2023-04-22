import { BsTrash } from "react-icons/bs"
const Todo = ({ todos , onComplete,onDelete}) => {
  return (
    <div className={todos.isCompleted ? "completedTodo" : "todo"}>
      <div>{todos.text}</div>
      <div>
        <button>Edit</button>
        <button onClick={onComplete}>{todos.isCompleted ? "completed" : "complete"}</button>
        <button onClick={onDelete}><BsTrash/></button>
      </div>
    </div>
  );

};

export default Todo;
