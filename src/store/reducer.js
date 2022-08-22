import * as ActionTypes from "./ActionType";

export const INITIAL_STATE = {
  items: {},
  hiddenItem: {},
  closeItems: false,
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
    case ActionTypes.HIDDEN_ITEM:
      return {
        ...state,
        hiddenItem: action.item !== state.hiddenItem ? action.item : null,
      };
    case ActionTypes.CLOSE_ITEMS:
      return {
        ...state,
        closeItems: !state.closeItems,
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
