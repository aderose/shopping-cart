import React from 'react';

const CartItem = ({ title, price, quantity, onChange }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>£{price.toFixed(2)}</td>
      <td>
        <input
          type="number"
          value={quantity}
          onChange={onChange}
          min="0"
          max="99"
        />
      </td>
      <td>£{(price * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
