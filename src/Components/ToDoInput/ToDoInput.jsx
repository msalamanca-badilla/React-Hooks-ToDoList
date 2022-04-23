import React, { useState } from "react";

export default function TodoList({addToDo}){
    const [toDoInput, setToDoInput]= useState('')

    const handleChange = evt => {
        setToDoInput(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        addToDo(toDoInput)
        setToDoInput('')
    }

    return(
        <div className = 'ToDoList'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={toDoInput}
                    onChange={handleChange}
                />
                <button onSubmit={handleSubmit}>Add To Do</button>
                {/* <button>Remove To Do</button> */}
            </form>
        </div>
    )
}

