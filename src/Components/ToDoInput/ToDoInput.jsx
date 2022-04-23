import React, { useState } from "react";

export default function TodoList(){
    const [toDoInput, setToDoInput]= useState('')

    const handleChange = evt => {
        setToDoInput(evt.target.value)
    }
    const addToDo = evt => {
        evt.preventDefault()
        setToDoInput({
            toDoInput:' '
        })
    }

    return(
        <div className = 'ToDoList'>
            <form onSubmit={(evt)=>addToDo(evt)}>
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

