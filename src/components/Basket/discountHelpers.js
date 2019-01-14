export default (updatedBasket, item, total) => {
	const itemFrequency = itemTypeFrequency(updatedBasket, item.code);
	const itemPrice = item.discount
		? getDiscount(itemFrequency, item)
		: item.price;

	return total + itemPrice;
};

const itemTypeFrequency = (basket, code) => {
	const itemArray = basket.filter(item => item.code === code);
	return itemArray.length;
};

const getDiscount = (frequency, item) => {
	const { price, discount } = item;

	if (discount.repeats) {
		const applyDiscount = frequency % discount.threshold === 0;
		return applyDiscount ? calculateDiscount(item) : price;
	}

	if (frequency > discount.threshold) return calculateDiscount(item);
	if (frequency === discount.threshold)
		// calculate discount on item and previously added items of same type
		return price - (price - calculateDiscount(item)) * discount.threshold;

	return price;
};

const calculateDiscount = item => item.price * (1 - item.discount.value);
