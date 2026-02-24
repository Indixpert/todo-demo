import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  }, []);

  const addTodo = (text) => {
    axios.post('/api/todos', { text })
      .then(res => setTodos([res.data, ...todos]))
      .catch(err => console.log(err));
  };

  const toggleComplete = (id) => {
    axios.put(`/api/todos/${id}`)
      .then(res => {
        setTodos(todos.map(todo => 
          todo._id === id ? { ...todo, completed: res.data.completed } : todo
        ));
      })
      .catch(err => console.log(err));
  };

  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;