import React, {useState} from "react";

export default function toDoItem({item,index}){
    return(
        <div className='toDoItem'>
            <li>{item.todo}</li>
        </div>
    )
}