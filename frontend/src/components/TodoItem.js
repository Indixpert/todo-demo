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
        className="flex justify-between items-center p-3 border-b border-gray-200/80 last:border-b-0 bg-violet-50/50"
      >
        <input
          type="text"
          className="flex-grow bg-transparent p-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <div className="flex-shrink-0 flex items-center space-x-2">
          <button type="submit" className="bg-emerald-500 text-white px-3 py-1 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 text-sm font-medium transition-colors">
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(false)} className="bg-slate-500 text-white px-3 py-1 rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 text-sm font-medium transition-colors">
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div
      className="group flex justify-between items-center p-3 border-b border-gray-200/80 last:border-b-0 hover:bg-violet-50/50 transition-colors duration-200"
    >
      <div className="flex items-center flex-grow cursor-pointer mr-2" onClick={() => toggleComplete(todo._id)}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
              e.stopPropagation();
              toggleComplete(todo._id)
            }
          }
          className="mr-3 h-5 w-5 text-violet-600 bg-gray-100 rounded border-gray-300 focus:ring-violet-500 focus:ring-2 cursor-pointer"
        />
        <span
          className={`flex-grow transition-all ${todo.completed ? 'line-through text-gray-500 opacity-75' : 'text-gray-800'}`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex-shrink-0 flex items-center space-x-2">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2">
            <button onClick={() => setIsEditing(true)} className="bg-amber-500 text-white px-3 py-1 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 text-sm font-medium transition-colors">
            Edit
            </button>
            <button onClick={() => deleteTodo(todo._id)} className="bg-rose-500 text-white px-3 py-1 rounded-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 text-sm font-medium transition-colors">
            Delete
            </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
