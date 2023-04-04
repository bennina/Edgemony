import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import AddTask from "./components/addTask";
import TasksList from "./components/tasksList";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  
  const onHandleClick = () => (console.log(state.isModalVisibile), state.isModalVisibile = true, console.log(state.isModalVisibile));
  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
      
        {state.isModalVisibile && (
          <AddTask value={{ state, dispatch }}/>
        )}
       
        
        <Hero />
        <TasksList />
        
        <button className={styles.addTodo} onClick={onHandleClick}>{"+"}</button>
        
      </Context.Provider>
    </div>
  );
}

export default App;
