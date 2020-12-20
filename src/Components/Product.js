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
  };

  return (
    <div className="product card">
      <img src={link} alt={alt} />
      <div className="product-details">
        <h2>{title}</h2>
        <p>{price}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="amount"
            id="amount"
            min="1"
            max="19"
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
