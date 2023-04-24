const Navbar = ({value}) => {
    const uncompletedTodos = [...value]
    const unccompletedTodosCount = uncompletedTodos.filter(todo => todo.isCompleted == false)
    return ( 
        <div className="uncompletedCount">
            <span className="uncompletedBadge">{unccompletedTodosCount.length}</span><p>{unccompletedTodosCount.length ? "Todos are uncompleted" : "No uncompleted Todos!"}</p>
        </div>
     );
}
 
export default Navbar;