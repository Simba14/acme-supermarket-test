import React from 'react'

export default ({basket, total}) =>
  <div>
    <h4>Your Order</h4>
    {basket.map(item =>
      <div>
        <span>{item.title}</span>
        <span>£{item.price}</span>
      </div>
    )}
    <h5>Total: £{total}</h5>
  </div>
