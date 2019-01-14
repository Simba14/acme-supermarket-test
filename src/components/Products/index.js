import React from 'react';
import styled from 'styled-components';

import Product from '../Product';
import productsData from '../../../data/products.json';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
`;

export default () => (
	<Container>
		{productsData.products.map(product => (
			<Product key={product.code} item={product} />
		))}
	</Container>
);
