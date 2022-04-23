import React from "react";

export default function toDoItem({item,index}){
    return(
        <div className='toDoItem'>
            <div>{item.todo}<button>Remove To Do</button></div>
        </div>
    )
}