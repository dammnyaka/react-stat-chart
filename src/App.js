import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import "./App.scss";
import db from "./db/data.json";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [items, setItems] = useState();
  const [close, setClose] = useState(false);
  const [hidden, setHidden] = useState();
  const [setting, setOptions] = useState(false);

  useEffect(() => {
    setItems(db);
  }, [items]);

  return (
    <div className="App">
      <div className="container">
        <Header setClose={setClose} close={close} setOptions={setOptions} options={setting} />
        {close && <Main items={items} setItems={setItems} hidden={hidden} setHidden={setHidden} options={setting} />}
      </div>
    </div>
  );
}

export default App;
