import { useReducer, createContext } from "react";
import { mainReducer } from "./reducer/reducers";
// initial state

let initialState = {
  cryptoListData: [],
  modeData: true,
};

const checkTheme = () => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem("theme");
    if (item !== null) {
      initialState.modeData = JSON.parse(localStorage.getItem("theme"));
    }
  }
};
checkTheme();

// create context
const Context = createContext({});

// combine reducer function

const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers(mainReducer),
    initialState
  );
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
