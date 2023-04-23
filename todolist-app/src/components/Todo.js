import { BsTrash } from "react-icons/bs"
const Todo = ({ todos , onComplete,onDelete,onEdit}) => {
  return (
    <div className={todos.isCompleted ? "completedTodo" : "todo"}>
      <div>{todos.text}</div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onComplete}>{todos.isCompleted ? "completed" : "complete"}</button>
        <button onClick={onDelete}><BsTrash/></button>
      </div>
    </div>
  );

};

export default Todo;
