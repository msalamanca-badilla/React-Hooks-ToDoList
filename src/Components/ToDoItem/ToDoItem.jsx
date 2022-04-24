import React from "react";

export default function toDoItem({item,index, removeToDo}){

    return(
        <div className='toDoItem'>
            <div>{item.todo}<button onClick={() => removeToDo(index)}>Remove To Do</button></div>
        </div>
    )
}