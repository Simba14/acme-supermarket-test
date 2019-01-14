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
	h1 {
		padding-left: 32px;
	}
	> div {
		background: #eee;
		color: black;
		min-height: 80vh;
		padding: 32px;
	}
`;

export default class App extends React.Component {
	render() {
		return (
			<Wrapper>
				<GlobalStyle />
				<h1>ACME Supermarket</h1>
				<div>
					<Products />
					<Basket total={3.0} />
				</div>
			</Wrapper>
		);
	}
}
