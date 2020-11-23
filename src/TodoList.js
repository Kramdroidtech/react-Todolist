import React , { useState  } from 'react';

// Components
import TodoItem from './components/TodoItem.js';

// Data
import Todos from './Todos.js'

const TodoList = () => {
  
  const [newTodo,setNewTodo] = useState({});
  
  const [allTodos,setTodos] = useState(Todos);
  
  const [inputVal,setInputVal] = useState('');

  const changingValue = (e) => {
    const todo = e.target.value;
    setInputVal(todo);
    setNewTodo({
      id: new Date().getMilliseconds(),
      todo: todo !== '' ? todo : 'No Todo Here',
      isCompleted: false
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const todos = allTodos;
    await setInputVal('');
    await setTodos([...todos,newTodo]);
    const dataConvert = JSON.stringify([...todos,newTodo]);
    await localStorage.setItem('Todos',dataConvert)
    console.log(allTodos)
  }
  const clearTodos = () => {
    setTodos([])
    setInputVal('')
    localStorage.clear()
  }
  
  const List = allTodos.map((todos,index) => <TodoItem key={index} todos={todos}/>);
  return (
    <div className="Todo-List" id="Todo-list">
     <h1 className="todo-title">Todolist</h1>
      <form autocomplete="off" className="Todo-Add-Container" onSubmit={handleSubmit}>
       <input type="text" name="TodoAdd" placeholder="e.g Eating Banana..." onChange={changingValue} value={inputVal}/>
       <button type="submit">Add</button>
      </form>
      <div className="All-Todos">
      
        {
          List.length > 0 ?
          List : 
          <h2 className="zero-record">No Todos Found</h2>
        }
        
      </div>
      
  <button className="clearButton" onClick={clearTodos} style={{
  
      display: List.length > 0 ? 'block' : 'none'

      }}>Clear All</button>
    </div>
  )
}

export default TodoList;