import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, updateTodo }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))
      ) : (
        <p className="p-4 text-center text-gray-500">Your todo list is empty.</p>
      )}
    </div>
  );
};

export default TodoList;
