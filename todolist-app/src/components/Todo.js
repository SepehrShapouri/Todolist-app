import { BsTrash } from "react-icons/bs";
const Todo = ({ todos, onComplete, onDelete, onEdit }) => {
  return (
    <div className={todos.isCompleted ? "completedTodo" : "todo"}>
      <div onClick={onComplete}>{todos.text}</div>
      <div>
        <button className="btn" onClick={onEdit}>Edit</button>
        <button className="btn remove" onClick={onDelete}>
          <BsTrash />
        </button>
      </div>
    </div>
  );
};

export default Todo;
