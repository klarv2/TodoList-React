import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const Navbar = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="navbar col-md-12 center">
      <div className="row col-md-12 center">

        <h1>Todo List</h1>
        <p>Currently you have <span>{todos.length}</span> todos to get through...</p>
      </div>
    </div>
  );
}
 
export default Navbar;