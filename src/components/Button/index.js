import React from 'react';
import styled from 'styled-components';

import { gutterSize } from '../../theme/constants';

const Button = styled.div`
	background: #00aa5b;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	width: 270px;
	margin-top: ${gutterSize};
	cursor: pointer;
	text-transform: uppercase;
	&:hover {
		background: #007941;
	}
`;

export default ({ title, onClick }) => (
	<Button onClick={onClick}>{title}</Button>
);
