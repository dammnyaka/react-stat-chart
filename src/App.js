import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import "./App.scss";
import db from "./db/data.json";
import { useEffect, useReducer } from "react";
import { INITIAL_STATE, reducer } from "./store/reducer";
import { SUCCESS_ITEMS } from "./store/ActionType";

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: SUCCESS_ITEMS, payload: db });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header state={state.openItems} dispatch={dispatch} />
        {state.openItems && <Main state={state} dispatch={dispatch} />}
      </div>
    </div>
  );
}

export default App;
