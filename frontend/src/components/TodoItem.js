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
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          borderBottom: '1px solid #ccc',
        }}
      >
        <input
          type="text"
          className="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <div>
          <button type="submit" style={{ marginRight: '5px' }}>
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ccc',
      }}
    >
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => toggleComplete(todo._id)}
      >
        {todo.text}
      </span>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo._id)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={() => setIsEditing(true)} style={{ marginRight: '5px' }}>
          Update
        </button>
        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
