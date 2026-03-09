import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (text.trim()) {
      updateTodo(todo._id, text);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <form
        onSubmit={handleUpdate}
        className="flex justify-between items-center p-4 my-2 rounded-xl bg-white/90 backdrop-blur-sm shadow-md animate-scale-in"
      >
        <input
          type="text"
          className="flex-grow bg-transparent p-2 border-b-2 border-violet-300 focus:outline-none focus:border-violet-500 transition-colors text-lg"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <div className="flex-shrink-0 flex items-center space-x-2 ml-4">
          <button type="submit" className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 font-semibold transition-all transform hover:scale-105">
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(false)} className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 font-semibold transition-all transform hover:scale-105">
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div
      className="group flex justify-between items-center p-4 my-2 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
    >
      <div className="flex items-center flex-grow cursor-pointer mr-4" onClick={() => toggleComplete(todo._id)}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
              e.stopPropagation();
              toggleComplete(todo._id)
            }
          }
          className="mr-4 h-6 w-6 text-violet-600 bg-gray-100 rounded-full border-gray-300 focus:ring-violet-500 focus:ring-2 cursor-pointer"
        />
        <span
          className={`flex-grow transition-all text-lg ${todo.completed ? 'line-through text-gray-400 italic' : 'text-gray-800'}`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex-shrink-0 flex items-center space-x-2">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2">
            <button onClick={() => setIsEditing(true)} className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 font-semibold transition-all transform hover:scale-105">
            Edit
            </button>
            <button onClick={() => deleteTodo(todo._id)} className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 font-semibold transition-all transform hover:scale-105">
            Delete
            </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
