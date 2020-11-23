import React, { useState } from 'react'

const TodoItem = ({ todos }) => {
  
  const { todo , isCompleted } = todos;
  
  let [completed, setCompleted ] = useState(isCompleted)
  
  const toggleCompleted = () => {
    setCompleted(!completed)
  }
 
  return (
     <div className="Todo-item">
       <input type="checkbox" name="check" onChange={toggleCompleted} checked={completed} />
       <label onClick={toggleCompleted} style={
         {
         textDecoration: completed ? 'line-through' : 'none'   
         }
       }>{ todo }</label>
     </div>
  )
}

export default TodoItem;