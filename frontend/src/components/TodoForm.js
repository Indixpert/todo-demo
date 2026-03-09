import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-8 shadow-lg rounded-xl">
      <input 
        type="text"
        className="flex-grow p-4 border-none rounded-l-xl focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500 transition-all duration-300 text-lg bg-white/80 backdrop-blur-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="✨ Add a new magical task..."
      />
      <button 
        type="submit" 
        className="bg-gradient-to-br from-violet-500 to-purple-600 text-white px-8 py-4 rounded-r-xl hover:from-violet-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 font-bold text-lg transform hover:scale-105"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
