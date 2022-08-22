import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import "./App.scss";
import db from "./db/data.json";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [items, setItems] = useState();
  const [close, setClose] = useState(false);
  const [hiddenItems, setHiddenItems] = useState();
  const [options, setOptions] = useState(false);

  useEffect(() => {
    // setItems(db);
    const f = async () => {
      await setItems(db);
      const interval = setInterval(() => {
        setItems(db);
        console.log("sub");
      }, 5000);
    };

    // const interval = setInterval(() => {
    //   setItems(db);
    //   console.log("sub");
    // }, 5000);

    return () => {
      // console.log("clear");
      // clearInterval(interval);
    };
  }, [items]);

  return (
    <div className="App">
      <div className="container">
        <Header setClose={setClose} close={close} setOptions={setOptions} options={options} />
        {close && (
          <Main
            items={items}
            setItems={setItems}
            hiddenItems={hiddenItems}
            setHiddenItems={setHiddenItems}
            options={options}
          />
        )}
      </div>
    </div>
  );
}

export default App;
