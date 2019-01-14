import { createAction } from 'redux-actions';
import mapValues from 'lodash.mapvalues';

export const types = {
	addItem: 'Basket/addItem',
	removeItem: 'Basket/removeItem'
};

export const actions = mapValues(types, type => createAction(type));

const calculateTotal = (updatedBasket, item, total) => {
	const itemFrequency = itemTypeFrequency(updatedBasket, item.code);
	const itemPrice = item.discount
		? getDiscount(itemFrequency, item)
		: item.price;
	console.log(itemPrice);
	return total + itemPrice;
};

const getDiscount = (frequency, item) => {
	if (item.discount.repeats) {
		if (frequency % item.discount.threshold === 0) {
			return calculateDiscount(item);
		}
		return item.price;
	}
	if (frequency > item.discount.threshold) return calculateDiscount(item);
	if (frequency === item.discount.threshold)
		return (
			item.price -
			(item.price - calculateDiscount(item)) * item.discount.threshold
		);
	return item.price;
};

const calculateDiscount = item => item.price * (1 - item.discount.value);

const itemTypeFrequency = (basket, code) => {
	const itemArray = basket.filter(item => item.code === code);
	return itemArray.length;
};

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
