import React from "react";
import List from "../List/List";
import "./Main.scss";
import removeIcon from "../../icon/remove.png";
import Charts from "../Chart/Charts";
import { useRef } from "react";

const Main = ({ items, hiddenItems, setHiddenItems, options, setItems }) => {
  const myRef = useRef();
  const handleClick = (item, e) => {
    // let top = window.innerHeight / 2;
    // myRef.current.scrollIntoView({ block: "nearest", behavior: "smooth", inline: "center" });
    // window.scrollTo(0, myRef.current.offsetTop + top);
    // e.currentTarget.scrollIntoView({ block: "start", behavior: "smooth" });
    // console.log(e.target);
    // console.log(myRef.current.offsetTop);
    // console.log(window.innerHeight);
    setHiddenItems(item.id !== hiddenItems ? item.id : null);
    e.currentTarget.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  const remove = (item, e, index) => {
    e.stopPropagation();
    if (item.id) {
      setItems(items.splice(index, 1));
    }
  };
  return (
    <main className="main">
      <ul className="table_head">
        <li>Показатель</li>
        <li>Текущий день</li>
        <li>Вчера</li>
        <li>Эта неделя</li>
      </ul>
      <ul className="table_body">
        {items &&
          items.map((item, index) => (
            <li ref={myRef} className="body" key={item.id} onClick={(e) => handleClick(item, e)}>
              <div className="body_item">
                <div className="body_item_name">
                  <div>{item.name}</div>
                  {options && <img onClick={(e) => remove(item, e, index)} src={removeIcon} alt="remove" />}
                </div>
                <div className="body_item_today">
                  <div>{item.today}</div>
                </div>
                <div className="body_item_yesterday">
                  <div>{item.yesterday}</div>
                  <div className={item.percent > 0 ? "precent_green" : "precent_red"}>{`${item.percent}%`}</div>
                </div>
                <div>{item.weeks}</div>
              </div>
              {hiddenItems === item.id && (
                <ul className="body_list" onClick={(e) => e.stopPropagation()}>
                  <Charts item={item} />
                  {item.lists.map((list) => (
                    <List key={list.id} list={list} />
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Main;
