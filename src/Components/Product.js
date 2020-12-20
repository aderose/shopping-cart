import React, { useState } from 'react';

import '../styles/Product.css';

const Product = ({ id, link, alt, title, price, submit }) => {
  const [value, setValue] = useState(1);

  const updateValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit({ id, quantity: parseInt(value) });
    setValue(1);
  };

  return (
    <div className="product card">
      <img src={link} alt={alt} />
      <div className="product-details">
        <h2>{title}</h2>
        <p>£{price.toFixed(2)}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="amount"
            id="amount"
            min="1"
            max="99"
            autoComplete="off"
            value={value}
            onChange={updateValue}
          />
          <input type="submit" value="Add" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Product;
