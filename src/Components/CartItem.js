import React from 'react';

const CartItem = ({ title, price, quantity, total, onChange }) => {
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
          max="19"
        />
      </td>
      <td>£{total.toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
