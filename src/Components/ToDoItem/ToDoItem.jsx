import React from "react";

export default function toDoItem({item,index}){
    return(
        <div className='toDoItem'>
            <div>{item.todo}</div>
        </div>
    )
}