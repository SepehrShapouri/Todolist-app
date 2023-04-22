import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <div>add some todos</div>;
    return todos.map((todo) => {
      return <Todo todos={todo} />;
    });
  };
  return <div>{renderTodos()}</div>;
};
export default TodoList;
