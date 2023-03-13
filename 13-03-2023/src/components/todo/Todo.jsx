import { useState } from "react";
import Singletodo from "../singletodo/Singletodo";
import toDoList from "../../mock/toDoList";

import "./index.css";

const Todo = () => {
  
  const addList = () => {
    const inputVal = document.querySelector('#newTodo')
    let ids = toDoList.length + 1
    console.log(ids)
    const newItem = {
      id: ids,
      state: 0,
      title: inputVal.value,
    };
    const cardEl = document.createElement('div');
    cardEl.className = 'state toDo';
    cardEl.innerHTML = '<input id="toDo_'+ids+'" type="checkbox"><label htmlFor={`toDo_'+ids+'`}>'+inputVal.value+'</label>'
    const divTodo = document.querySelector('.Todo')
    divTodo.appendChild(cardEl);
    toDoList.push(newItem)
  };


  return (
    <div className="Todo">
      <div className="addItem">
        <input id="newTodo" placeholder="aggiungi alla lista" type="text" name="newTodo" />
        <button onClick={addList}>
          Salva
        </button>
      </div>

      {toDoList.map((item, index) => (
          <Singletodo data={item} key={index} />
      ))}
      
    </div>
  );
};

export default Todo;
