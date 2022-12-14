import * as ActionTypes from "./ActionType";

export const INITIAL_STATE = {
  items: {},
  openList: {},
  openItems: false,
  optionItems: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SUCCESS_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.remove),
      };
    case ActionTypes.OPEN_LIST:
      return {
        ...state,
        openList: action.item !== state.openList ? action.item : null,
      };
    case ActionTypes.OPEN_ITEMS:
      return {
        ...state,
        openItems: !state.openItems,
      };
    case ActionTypes.OPTION_ITEMS:
      return {
        ...state,
        optionItems: !state.optionItems,
      };
    default:
      return state;
  }
};
