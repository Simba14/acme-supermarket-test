import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../Basket/state';

import Button from '../Button';

const Product = ({ addItem, item }) => {
	const handleOnClick = () => addItem(item);

	return (
		<div>
			<div>{item.name}</div>
			<div>£{item.price}</div>
			<Button title="Add to Basket" onClick={handleOnClick} />
		</div>
	);
};

const mapDispatchToProps = {
	addItem: actions.addItem
};

export default connect(
	null,
	mapDispatchToProps
)(Product);
