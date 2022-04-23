import './App.css';
import TodoInput from './Components/ToDoInput/ToDoInput';
import ToDoItem from './Components/ToDoItem/ToDoItem';
import React, {useState} from 'react';

function App() {
  const [toDoItems, setToDoItems] = useState(
    [{todo: 'mow lawn'}]
  )

  return (
    <div className="App">
      <h1>React Hooks To Do List</h1>
      <TodoInput />
        {toDoItems.map((item,index)=>(<ToDoItem key = {index} index={index} item={item}/>
        ))}
    </div>
  );
}

export default App;
