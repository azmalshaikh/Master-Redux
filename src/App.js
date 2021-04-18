import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Input from './components/Input';
import Todo from './components/Todo';
import { selectTodoList } from './features/TodoSlice';

function App() {

  const todolist = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app__container">

        <div className="app__todoContainer">
          {todolist.map((item) => {
            return <Todo item={item.item} done={item.done} id={item.id}/>
          })}
        </div>

        <Input/>
      </div>
    </div>
  );
}

export default App;
