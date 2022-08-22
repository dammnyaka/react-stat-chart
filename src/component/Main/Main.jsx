import List from "../List/List";
import "./Main.scss";
import removeIcon from "../../icon/remove.png";
import Charts from "../Chart/Charts";
import { OPEN_ITEM, REMOVE_ITEM } from "../../store/ActionType";

const Main = ({ state, dispatch }) => {
  const handleClick = (item) => {
    dispatch({ type: OPEN_ITEM, item: item.id });
  };

  const remove = (item, e) => {
    e.stopPropagation();
    if (item.id) {
      dispatch({ type: REMOVE_ITEM, remove: item.id });
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
        {state.items.length > 0 &&
          state.items.map((item) => (
            <li className="body" key={item.id} onClick={(e) => handleClick(item)}>
              <div className="body_item">
                <div className="body_item_name">
                  <div>{item.name}</div>
                  {state.optionItems && <img onClick={(e) => remove(item, e)} src={removeIcon} alt="remove" />}
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
              {state.openItem === item.id && (
                <ul className="body_list" onClick={(e) => e.stopPropagation()}>
                  <Charts item={item} />
                  {item.lists.map((list) => (
                    <List key={list.listid} list={list} />
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
