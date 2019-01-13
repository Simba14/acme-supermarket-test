import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
	background: #00aa5b;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	width: 290px;
	margin-top: 16px;
	cursor: pointer;
	text-transform: uppercase;
	&:hover {
		background: #007941;
	}
`;

export default ({ title, onClick }) => (
	<Button onClick={onClick}>{title}</Button>
);
