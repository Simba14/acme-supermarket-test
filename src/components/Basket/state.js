import { createAction } from "redux-actions";
import mapValues from "lodash.mapvalues";

export const types = {
  addItem: "Basket/addItem",
  removeItem: "Basket/removeItem"
};

export const actions = mapValues(types, type => createAction(type));

const initialState = {
  basket: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.addItem:
      return {
        basket: [
          ...state.basket,
          action.payload
        ]
      };
    case types.removeItem:
      return {
        basket: state.basket.splice(action.payload, 1),
      };
    default:
      return state;
  }
};
