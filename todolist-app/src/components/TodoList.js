import Todo from "./Todo";

const TodoList = ({ todos , onComplete,onDelete}) => {
  const renderTodos = () => {
    if (todos.length === 0) return <div>add some todos</div>;
    return todos.map((todo) => {
      return <Todo todos={todo} key={todo.id} onComplete={() => onComplete(todo.id)} onDelete={()=> onDelete(todo.id)}/>;
    });
  };
  return <div>{renderTodos()}</div>;
};
export default TodoList;
