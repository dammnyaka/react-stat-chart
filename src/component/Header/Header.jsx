import React, { memo } from "react";
import "./Header.scss";
import refreshIcon from "../../icon/refresh.png";
import settingIcon from "../../icon/setting.png";
import closIcon from "../../icon/close.png";
import doneIcon from "../../icon/done.png";

const Header = ({ setClose, close, setOptions, options }) => {
  return (
    <header className="App-header">
      <div>
        <h1>Общая статистика</h1>
      </div>
      <div>
        <img onClick={() => window.location.reload(true)} src={refreshIcon} alt="refresh" />
        <img onClick={() => setOptions(!options)} src={settingIcon} alt="setting" />
        <img onClick={() => setClose(!close)} src={close === false ? doneIcon : closIcon} alt="close,done icon" />
      </div>
    </header>
  );
};

export default memo(Header);
