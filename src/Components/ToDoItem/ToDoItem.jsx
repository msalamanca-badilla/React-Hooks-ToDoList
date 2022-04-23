import React, {useState} from "react";

export default function toDoItem({item,index}){
    return(
        <div className='toDoItem'>
            this is the list item
            <li>{item.todo}</li>
        </div>
    )
}