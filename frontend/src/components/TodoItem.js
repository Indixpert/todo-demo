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
        className="flex justify-between items-center p-2.5 border-b border-gray-200"
      >
        <input
          type="text"
          className="flex-grow bg-transparent p-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <div className="flex-shrink-0">
          <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mr-1.5 focus:outline-none focus:ring-2 focus:ring-green-500">
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div
      className="flex justify-between items-center p-2.5 border-b border-gray-200 last:border-b-0"
    >
      <div className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo._id)}
          className="mr-2.5 h-5 w-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
        />
        <span
          className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
          onClick={() => toggleComplete(todo._id)}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex-shrink-0">
        <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 mr-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          Update
        </button>
        <button onClick={() => deleteTodo(todo._id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
