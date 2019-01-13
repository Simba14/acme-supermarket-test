import React from 'react';

import Button from '../Button';

export default ({ item }) => (
	<div>
		<div>{item.name}</div>
		<div>£{item.price}</div>
		<Button title="Add to Bag" />
	</div>
);
