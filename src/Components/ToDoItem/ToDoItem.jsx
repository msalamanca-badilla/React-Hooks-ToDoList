import React from "react";

export default function toDoItem({toDoItem,index, removeToDo}){

    return(
        <div className='toDoItem'>
            {toDoItem.todo < 1?(
                <div></div>    
            ):(
                <div>{toDoItem.todo}<button onClick={() => removeToDo(index)}>Remove To Do</button></div>
            )}
        </div>
    )
}