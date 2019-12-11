import React, { useContext } from 'react';
import TodoDetails from './TodoDetails';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div className="todo-list">
      <ul>
        {todos.map(todo => {
          return ( <TodoDetails todo={todo} key={todo.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No More Todos.</div>
  );
}

export default TodoList;