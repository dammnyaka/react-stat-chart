import React, { memo } from "react";
import "./List.scss";

const List = ({ list }) => {
  const difference = (today, yesterday) => {
    return ((yesterday - today) * 100) / yesterday;
  };

  return (
    <li className="list" key={list.id}>
      {list.percent && (
        <div className="list_body">
          <div className="list_body_name">{list.name}</div>
          <div className="list_body_today">{list.today}</div>
          <div className="list_body_yesterday">
            <div>{list.yesterday}</div>
            <div
              className={difference(list.today, list.yesterday) > 0 ? "precent_green" : "precent_red"}
            >{`${difference(list.today, list.yesterday).toFixed(0)}%`}</div>
          </div>
          <div>{list.weeks}</div>
        </div>
      )}
    </li>
  );
};

export default memo(List);
