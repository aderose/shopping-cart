import React from 'react';
import Product from './Product';

import '../styles/Shop.css';

const Shop = ({ products }) => {
  return (
    <div className="container shop">
      <h1>Our Products:</h1>
      {products.map(({ id, link, alt, title, price }) => (
        <Product link={link} alt={alt} title={title} price={price} key={id} />
      ))}
    </div>
  );
};

export default Shop;
