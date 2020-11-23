import React from 'react';
// import { Switch,Route } from 'react-router-dom';

// STYLES
import './styles/index.css';
import './styles/App.css'

// Tags
import TodoList from './TodoList.js';

const App = () => {
  
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
