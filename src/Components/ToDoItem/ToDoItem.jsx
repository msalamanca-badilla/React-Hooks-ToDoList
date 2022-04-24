import React from "react";

export default function toDoItem({toDoItem,index, removeToDo}){

    return(
        <div className='toDoItem'>
            <div>{toDoItem.todo}<button onClick={() => removeToDo(index)}>Remove To Do</button></div>
        </div>
    )
}