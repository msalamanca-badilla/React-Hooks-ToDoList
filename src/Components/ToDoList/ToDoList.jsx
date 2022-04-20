import React, { useState } from "react";

export default function TodoList(){
    const [toDoData, setToDoData]= useState({
        toDo: 'No To Dos Added'
    })


    return(
        <div className = 'ToDoList'>
            <div>{toDoData.toDo}</div>
            <br />
            <input type="text" />
            <button>Add To Do</button>
            <button>Remove To Do</button>
        </div>
    )
}

