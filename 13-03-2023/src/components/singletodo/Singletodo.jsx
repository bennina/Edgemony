import { useState } from "react";

import "./index.css";

const Singletodo = ({ data }) => {
  const { id, state, title} = data;

  return (
    <div  className={`state ${state ? "done" : "toDo"}`}  >
      
      <input id={`toDo_${id}`} type="checkbox" checked={`${state ? "checked" : ""}`} />
      <label htmlFor={`toDo_${id}`}>
      {title}
      </label>
      
    </div>
  );
};

export default Singletodo;
