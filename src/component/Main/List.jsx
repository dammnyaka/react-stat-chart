import React from "react";
import "./List.scss";

const List = ({ list }) => {
  return (
    <div className="list" key={list.id}>
      {list.percent && (
        <div className="list_body">
          <div>{list.name}</div>
          <div className="list_body_today">{list.today}</div>
          <div className="list_body_yesterday">
            <div style={{ marginRight: "10px" }}>{list.yesterday}</div>
            <div className={list.percent > 0 ? "precent_green" : "precent_red"}>{`${list.percent} %`}</div>
          </div>
          <div>{list.weeks}</div>
        </div>
      )}
    </div>
  );
};

export default List;
