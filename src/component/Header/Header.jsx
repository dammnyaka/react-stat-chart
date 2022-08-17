import React from "react";
import "./Header.scss";
import refresh from "../../icon/refresh.png";
import setting from "../../icon/setting.png";
import closse from "../../icon/close.png";
import done from "../../icon/done.png";
const Header = ({ setClose, close, setOptions, options }) => {
  return (
    <header className="App-header">
      <div>
        <h1>Общая статистика</h1>
      </div>
      <div>
        <img onClick={() => window.location.reload(false)} src={refresh} alt="refresh" />
        <img onClick={() => setOptions(!options)} src={setting} alt="setting" />
        <img onClick={() => setClose(!close)} src={close === false ? done : closse} alt="" />
      </div>
    </header>
  );
};

export default Header;
