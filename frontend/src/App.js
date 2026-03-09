import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get('/api/todos');
      setTodos(res.data);
    } catch (err) {
      console.error('Error fetching todos:', err);
    }
  };

  const addTodo = async (text) => {
    try {
      const res = await axios.post('/api/todos', { text });
      setTodos([res.data, ...todos]);
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  const updateTodo = async (id, text) => {
    try {
      const res = await axios.put(`/api/todos/${id}`, { text });
      setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const res = await axios.put(`/api/todos/${id}`);
      setTodos(
        todos.map((todo) =>
          todo._id === id ? res.data : todo
        )
      );
    } catch (err) {
      console.error('Error toggling todo:', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-200 to-pink-200 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-lg p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">Todo App</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
