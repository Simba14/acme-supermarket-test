import React from 'react';
import { connect } from 'react-redux';

import { actions } from './state';

const Basket = ({ basket, total }) => (
	<div>
		<h4>Your Order</h4>
		{basket.map((item, index) => (
			<div key={item.code + index}>
				<span>{item.name}</span>
				<span>£{item.price}</span>
			</div>
		))}
		<h5>Total: £{total}</h5>
	</div>
);

const mapStateToProps = ({ basket }) => ({
	basket: basket.basket,
	total: basket.total
});

const mapDispatchToProps = {
	removeItem: actions.removeItem
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Basket);
