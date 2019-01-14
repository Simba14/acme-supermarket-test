import React from 'react';
import { connect } from 'react-redux';
import { css } from 'styled-components';

import Card from '../Card';

import { gutterSize } from '../../theme/constants';

const styles = css`
	align-items: flex-start;
	> div {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	h3 {
		margin-top: 0px;
	}

	.Total {
		font-weight: bold;
		border-top: 1px solid grey;
		margin-top: calc(${gutterSize} / 2);
		padding-top: calc(${gutterSize} / 2);
	}
`;

export const Basket = ({ basket, total }) => {
	if (!basket || basket.length < 1) return null;

	return (
		<Card styles={styles}>
			<h3>Basket</h3>
			{basket.map((item, index) => (
				<div className={'Item'} key={item.code + index}>
					<div>{item.name}</div>
					<div>£{item.price}</div>
				</div>
			))}
			<div className={'Total'}>
				<div>Total</div>
				<div>£{total}</div>
			</div>
		</Card>
	);
};

const mapStateToProps = ({ basket }) => ({
	basket: basket.basket,
	total: basket.total
});

export default connect(mapStateToProps)(Basket);
