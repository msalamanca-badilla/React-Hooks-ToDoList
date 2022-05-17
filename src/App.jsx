import './App.css';
import TodoInput from './Components/ToDoInput/ToDoInput';
import ToDoItem from './Components/ToDoItem/ToDoItem';
import React, {useState} from 'react';

export default function App() {
  const [toDoItems, setToDoItems] = useState(
    [{todo: null}]
  )

  const addToDo = todo => {
    const newToDo=[...toDoItems,{todo}]
    setToDoItems(newToDo)
  }

  const removeToDo = index => {
    const newToDo=[...toDoItems]
    newToDo.splice(index,1)
    setToDoItems(newToDo)
  }

  return (
    <div className="App">
      <h1>React Hooks To Do List</h1>
      {toDoItems.map((toDoItem,index)=>(
        <ToDoItem key = {index} index={index} toDoItem={toDoItem} removeToDo={removeToDo}/>
      ))}
      <TodoInput addToDo={addToDo} />
    </div>
  );
}