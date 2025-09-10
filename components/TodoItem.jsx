function TodoItem({ text, completed }) {
  return (
    <li>
      <input type="checkbox" defaultChecked={completed} />
      <span className={completed ? "completed" : ""}>{text}</span>
      <button className="delete-button">🗑️</button>
    </li>
  );
}

export default TodoItem;
