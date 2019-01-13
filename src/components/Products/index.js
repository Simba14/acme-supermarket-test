import React from 'react';
import styled from 'styled-components';

import Product from '../Product';
import productsData from '../../../data/products.json';

const Container = styled.div`
	background: white;
	color: black;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: auto;
	padding: 32px;
`;

export default () => (
	<Container>
		{productsData.products.map(product => (
			<Product key={product.code} item={product} />
		))}
	</Container>
);
