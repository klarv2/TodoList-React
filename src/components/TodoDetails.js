
import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

import { FaRegTrashAlt, FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

const TodoDetails = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <li>
      <div className="col-md-12">
        <div className="row">
          <div className="complete-square col-md-2">{todo.complete ? 
            (<FaRegCheckSquare onClick={() => dispatch({ type: 'COMPLETE_TODO', id: todo.id })}/>)
            :
            (<FaRegSquare onClick={() => dispatch({ type: 'COMPLETE_TODO', id: todo.id })}/>)}
          </div>
          <div className="card-content col-md-8">
            <div className="title">{todo.title}</div>
            <div className="description">{todo.description}</div>
          </div>
          <div className="card-right-items col-md-2">
            <div className="complete-title">{todo.complete ? (<p>Complete</p>):null}</div>
            <div className="trash-icon">
              <FaRegTrashAlt onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}/>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TodoDetails;