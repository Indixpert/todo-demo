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
        className="flex justify-between items-center p-3 border-b border-gray-200 last:border-b-0 bg-gray-50"
      >
        <input
          type="text"
          className="flex-grow bg-transparent p-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <div className="flex-shrink-0 flex items-center space-x-2">
          <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm font-medium">
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-sm font-medium">
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div
      className="group flex justify-between items-center p-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
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
          className="mr-3 h-5 w-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
        />
        <span
          className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex-shrink-0 flex items-center space-x-2">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center space-x-2">
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 text-sm font-medium">
            Edit
            </button>
            <button onClick={() => deleteTodo(todo._id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm font-medium">
            Delete
            </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
