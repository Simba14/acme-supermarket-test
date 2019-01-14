import { createAction } from 'redux-actions';
import mapValues from 'lodash.mapvalues';
import calculateTotal from './discountHelpers';

export const types = {
	addItem: 'Basket/addItem',
	removeItem: 'Basket/removeItem'
};

export const actions = mapValues(types, type => createAction(type));

const initialState = {
	basket: [],
	total: 0.0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.addItem:
			const updatedBasket = [...state.basket, action.payload];

			return {
				basket: updatedBasket,
				total: calculateTotal(updatedBasket, action.payload, state.total)
			};
		case types.removeItem:
			return {
				basket: state.basket.splice(action.payload, 1)
			};
		default:
			return state;
	}
};
