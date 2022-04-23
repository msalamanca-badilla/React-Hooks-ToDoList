import React, { useState } from "react";

export default function TodoList(){
    const [toDoInput, setToDoInput]= useState('')
    const [toDoData, setToDoData] = useState('No ToDos Added')

    const handleChange= evt => {
        setToDoInput(evt.target.value)
    }
    const addToDo= evt => {
        evt.preventDefault()
        const toDo = [toDoInput]
        setToDoData({
            toDo,
            toDoInput: ' '
        })
    }

    return(
        <div className = 'ToDoList'>
            
                <div>{toDoInput}</div>
                <br />
            <form onSubmit={addToDo}>
                <input 
                type="text" 
                value={toDoInput}
                onChange={handleChange}
                />
                <button onSubmit={addToDo}>Add To Do</button>
                {/* <button>Remove To Do</button> */}
            </form>
        </div>
    )
}

