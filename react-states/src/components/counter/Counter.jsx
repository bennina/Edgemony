import { useState, useContext } from "react";
import { GlobalContext } from "../../store";
import "./index.css";

const Counter = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const onHandleClick = (e) => dispatch({ type: e.target.className });

  return (
    <div className="Counter">      
      <h1>{state.value}</h1>
      <div className="row">
      <button className="increment" onClick={onHandleClick}>
        Aggiungi
      </button>
      <button className="decrement" onClick={onHandleClick}>
        Togli
      </button>
      <button className="reset" onClick={onHandleClick}>
        Ricomincia
      </button>
      <button>Aggiungi all'elemento padre (App)</button>
      </div>
    </div>
  );
};

export default Counter;
