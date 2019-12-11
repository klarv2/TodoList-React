import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const NewTodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
const handleSubmit = (e) => {
e.preventDefault();
dispatch({ type: 'ADD_TODO', todo: { title, description }});
setTitle('');
setDescription('');
setIsOpen(false)
}

  return (
      <div className="content">
          {isOpen ? (
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="title" value={title}
                    onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="description" value={description}
                    onChange={(e) => setDescription(e.target.value)} required />
                <button type="submit" className="btn button-add">Archive Todo</button>
              </form>
            ):(
               <button className="btn button-add" onClick={(e) => setIsOpen(true)}>Add Todo</button>
            )}
    
    </div>
  );
}
 
export default NewTodoForm;