import React, { memo } from "react";
import "./Header.scss";
import refreshIcon from "../../icon/refresh.png";
import settingIcon from "../../icon/setting.png";
import closIcon from "../../icon/close.png";
import doneIcon from "../../icon/done.png";
import { CLOSE_ITEMS, OPTION_ITEMS } from "../../store/ActionType";

const Header = ({ dispatch, state }) => {
  return (
    <header className="App-header">
      <div>
        <h1>Общая статистика</h1>
      </div>
      <div>
        <img onClick={() => window.location.reload(true)} src={refreshIcon} alt="refresh" />
        <img onClick={() => dispatch({ type: OPTION_ITEMS })} src={settingIcon} alt="setting" />
        <img
          onClick={() => dispatch({ type: CLOSE_ITEMS })}
          src={state.closeItems === false ? doneIcon : closIcon}
          alt="close,done icon"
        />
      </div>
    </header>
  );
};

export default memo(Header);
