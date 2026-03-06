import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const res = await axios.get(API_URL);
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async (text) => {
    try {
      const res = await axios.post(API_URL, { text });
      setTodos([res.data, ...todos]);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`);
      setTodos(
        todos.map((todo) =>
          todo._id === id ? { ...todo, completed: res.data.completed } : todo
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Indixpert Todo application</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
