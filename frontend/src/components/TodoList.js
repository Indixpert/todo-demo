import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, updateTodo }) => {
  return (
    <div className="mt-6 rounded-lg overflow-hidden shadow-inner bg-white/30">
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
        <p className="p-8 text-center text-gray-500 italic">Your todo list is empty. Add one above!</p>
      )}
    </div>
  );
};

export default TodoList;
