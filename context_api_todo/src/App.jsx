import { useState, useEffect } from 'react';
import './App.css';
import { TodoProvider } from './context';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) =>
      prevTodo.id === id ? todo : prevTodo
    ));
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) =>
      prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
    ));
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
        setTodos(storedTodos);
    }
    console.log('Stored todos from localStorage:', storedTodos);
}, []);

  useEffect(() => {
    console.log('Saving todos to localStorage:', todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <TodoProvider
      value={{
        todos,
        setTodos,
        addTodo,
        removeTodo,
        toggleTodo,
        updateTodo
      }}
    >
      <div className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] min-h-screen flex justify-center items-center py-8">
        <div className="w-full max-w-lg mx-auto bg-white shadow-xl rounded-lg p-6">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Manage Your Todos</h1>
          <div className="mb-6">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="space-y-4">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
