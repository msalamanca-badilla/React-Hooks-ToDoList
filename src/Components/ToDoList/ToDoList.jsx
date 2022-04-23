import React, { useState } from "react";

export default function TodoList(){
    const [toDoInput, setToDoInput]= useState('')
    const [toDoData, setToDoData] = useState('No ToDos Added')

    const handleChange=evt =>{
        setToDoInput(evt.target.value)
    }


    return(
        <div className = 'ToDoList'>
            <div>{toDoData}</div>
            <br />
            <input 
            type="text" 
            value={toDoInput}
            onChange={handleChange}
            />
            <button >Add To Do</button>
            <button>Remove To Do</button>
        </div>
    )
}

