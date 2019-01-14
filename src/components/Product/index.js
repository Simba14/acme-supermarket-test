import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions } from '../Basket/state';

import Button from '../Button';
import Card from '../Card';

const Product = ({ addItem, item }) => {
	const handleOnClick = () => addItem(item);

	return (
		<Card>
			<div>{item.name}</div>
			<div>£{item.price}</div>
			<Button title="Add to Basket" onClick={handleOnClick} />
		</Card>
	);
};

const mapDispatchToProps = {
	addItem: actions.addItem
};

export default connect(
	null,
	mapDispatchToProps
)(Product);
