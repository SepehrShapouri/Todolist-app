const Todo = ({ todos }) => {
  return (
    <div key={todos.id}>
      <div>{todos.text}</div>
      <div>
        <button>Edit</button>
        <button>Complete</button>
      </div>
    </div>
  );
};

export default Todo;
