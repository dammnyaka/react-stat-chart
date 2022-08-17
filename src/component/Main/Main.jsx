import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import List from "./List";
import "./Main.scss";

const Main = ({ items, hidden, setHidden, options, setItems }) => {
  const handleClick = (item) => {
    setHidden(item.id !== hidden ? item.id : null);
    console.log(item);
  };

  const remove = (item, e) => {
    e.stopPropagation();
    if (item.id !== -1) {
      setItems(items.splice(item.id - 1, 1));
    }

    // setItems([...items.slice(0, item.id), ...items.slice(item.id + 1)]);
    // setItems(item.filter((p) => p !== item));
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
          items.map((item) => (
            <div className="body" key={item.id} onClick={() => handleClick(item)}>
              <div className="body_item">
                <div>{item.name}</div>
                <div className="body_item_today">
                  <div>{item.today}</div>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "10px" }}>{item.yesterday}</div>
                  <div className={item.percent > 0 ? "precent_green" : "precent_red"}>{`${item.percent}%`}</div>
                </div>
                <div>{item.weeks}</div>
                {options && <input className="remove" type="checkbox" onClick={(e) => remove(item, e)} />}
              </div>
              {hidden === item.id && (
                <div className="body_list" onClick={(e) => e.stopPropagation()}>
                  <Line
                    data={{
                      labels: [1, 2, 3],
                      datasets: [
                        {
                          label: item.name,
                          data: [item.today, item.yesterday, item.weeks],
                          backgroundColor: [`#${Math.random().toString(16).substring(2, 8)}`],
                          borderWidth: 2,
                          lineTension: 0.3,
                          pointBorderWidth: 4,
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
