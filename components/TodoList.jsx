import TodoItem from './TodoItem.jsx';

function TodoList() {
    return (
    <ul className="task-list">
        <TodoItem text="Tarea N" completed={false} />
        <TodoItem text="Tarea N-1" completed={false} />
        <TodoItem text="Tarea completada N-2" completed={true} />
        <TodoItem text="Tarea K" completed={false} />
        <TodoItem text="Tarea 2" completed={false} />
        <TodoItem text="Tarea Completada 1" completed={true} />
    </ul>
    );
}

export default TodoList;
