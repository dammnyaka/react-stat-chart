import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import List from "./List";
import "./Main.scss";
import removeIcon from "../../icon/remove.png";

const Main = ({ items, hidden, setHidden, options, setItems }) => {
  const handleClick = (item) => {
    setHidden(item.id !== hidden ? item.id : null);
    console.log(item);
  };

  const remove = (item, e, index) => {
    e.stopPropagation();
    if (item.id) {
      setItems(items.splice(index, 1));
    }
  };
  return (
    <main className="main">
      <div className="table_head">
        <div>Показатель</div>
        <div>Текущий день</div>
        <div>Вчера</div>
        <div>Эта неделя</div>
      </div>
      <div className="table_body">
        {items &&
          items.map((item, index) => (
            <div className="body" key={item.id} onClick={() => handleClick(item)}>
              <div className="body_item">
                <div className="body_name">
                  <div>{item.name}</div>
                  {options && <img onClick={(e) => remove(item, e, index)} src={removeIcon} alt="remove" />}
                </div>
                <div className="body_item_today">
                  <div>{item.today}</div>
                </div>
                <div className="body_item_yesterday">
                  <div style={{ marginRight: "10px" }}>{item.yesterday}</div>
                  <div className={item.percent > 0 ? "precent_green" : "precent_red"}>{`${item.percent}%`}</div>
                </div>
                <div>{item.weeks}</div>
              </div>
              {hidden === item.id && (
                <div className="body_list" onClick={(e) => e.stopPropagation()}>
                  <Line
                    data={{
                      labels: [
                        Object.keys(item).splice(2, 1),
                        Object.keys(item).splice(3, 1),
                        Object.keys(item).splice(5, 1),
                      ],
                      datasets: [
                        {
                          label: item.name,
                          data: [item.today, item.yesterday, item.weeks],
                          backgroundColor: ["#ffffff"],
                          borderColor: [`#${Math.random().toString(16).substring(2, 8)}`],
                          borderWidth: 2,
                          fill: false,
                          lineTension: 0.3,
                        },
                      ],
                    }}
                  />
                  {item.lists.map((list) => (
                    <List key={list.id} list={list} />
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </main>
  );
};

export default Main;
