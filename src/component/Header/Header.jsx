import React from "react";
import "./Header.scss";
const Header = ({ setClose, close, setOptions, options }) => {
  return (
    <header className="App-header">
      <div>
        <h1>Общая статистика</h1>
      </div>
      <div>
        <button onClick={() => window.location.reload(false)}>refresh</button>
        <button onClick={() => setOptions(!options)}>options</button>
        <button onClick={() => setClose(!close)}>{close === false ? "open" : "close"}</button>
      </div>
    </header>
  );
};

export default Header;
