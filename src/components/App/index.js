import React from 'react';
import styled from 'styled-components';

import Basket from '../Basket';
import Products from '../Products';

import { GlobalStyle } from '../../theme/globalStyle';

const Wrapper = styled.div`
	background: palevioletred;
	color: white;
	position: absolute;
	top: 0;
	left: 0;
	min-height: 100vh;
	width: 100%;
	line-height: 2em;
`;

export default class App extends React.Component {
	render() {
		return (
			<Wrapper>
				<GlobalStyle />
				<div>
					<h1>ACME Supermarket</h1>
					<Products />
					<Basket total={3.0} />
				</div>
			</Wrapper>
		);
	}
}
