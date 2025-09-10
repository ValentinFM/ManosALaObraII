import TodoHeader from './components/TodoHeader.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  return (
    <div className="container">
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
