import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import Navbar from './components/Navbar';
import TodoContextProvider from './contexts/TodoContext';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <TodoList />
      <NewTodoForm />  
      </TodoContextProvider>
    </div>
  );
}

export default App;