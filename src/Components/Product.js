import React from 'react';

import '../styles/Product.css';

const Product = ({ link, alt, title, price }) => {
  return (
    <div className="product card">
      <img src={link} alt={alt} />
      <div className="product-details">
        <h2>{title}</h2>
        <p>{price}</p>
        <form>
          <input
            type="number"
            name="amount"
            id="amount"
            min="1"
            max="19"
            autoComplete="off"
          />
          <input type="submit" value="Add" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Product;
