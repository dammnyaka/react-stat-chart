import React from "react";
import "./List.scss";

const List = ({ list }) => {
  return (
    <div className="list" key={list.id} style={{ display: "flex" }}>
      <div className="list_container">
        <div>{list.name}</div>
        <div className="list_today">{list.today}</div>
        <div style={{ display: "flex" }}>
          <div>{list.yesterday}</div>
          <div className={list.percent > 0 ? "precent_green" : "precent_red"}>{`${list.percent}%`}</div>
        </div>
        <div>{list.weeks}</div>
      </div>
    </div>
  );
};

export default List;
