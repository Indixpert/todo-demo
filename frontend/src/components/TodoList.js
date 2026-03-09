import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, updateTodo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
        <p className="p-4 text-center text-gray-500">No todos yet. Add one above!</p>
      )}
    </div>
  );
};

export default TodoList;
