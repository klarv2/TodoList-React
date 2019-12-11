import uuid from 'uuid/v4';

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        title: action.todo.title, 
        description: action.todo.description, 
        id: uuid()}
      ]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'COMPLETE_TODO':
      return state.map(todo => todo.id === action.id ? {...todo, complete: !todo.complete} : todo);
    default:
      return state;
  }
} 