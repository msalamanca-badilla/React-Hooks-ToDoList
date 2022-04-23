import React, { useState } from "react";

export default function TodoList(){
    const [toDoInput, setToDoInput]= useState('')
    const [toDoData, setToDoData] = useState('No ToDos Added')

    const handleChange = evt => {
        setToDoInput(evt.target.value)
    }
    const addToDo = evt => {
        evt.preventDefault()
        setToDoData({
            toDoData: 'added',
        })
        setToDoInput({
            toDoInput:' '
        })
        console.log('input',  toDoInput)
        console.log('ida',  toDoData)
    }

    return(
        <div className = 'ToDoList'>
                <div>{toDoData.toString()}</div>
                <br />
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

