import React from 'react';

import CartItem from './CartItem';

import '../styles/Cart.css';

const Cart = ({ basket, grandTotal, onChange }) => {
  return (
    <div className="container card cart">
      <h1>Your Shopping Basket</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>#</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {basket.map(({ id, title, price, quantity, total }) => (
            <CartItem
              title={title}
              price={price}
              quantity={quantity}
              total={total}
              onChange={onChange(id)}
              key={id}
            />
          ))}
        </tbody>
      </table>
      <div className="total">
        <p>
          <strong>Grand Total: </strong>
          <span>£{grandTotal.toFixed(2)}</span>
        </p>
        <button className="btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
