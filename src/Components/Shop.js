import React from 'react';
import Product from './Product';

import '../styles/Shop.css';

const Shop = ({ products, addProduct }) => {
  return (
    <div className="container shop">
      <h1>Our Products:</h1>
      {products.map(({ id, link, alt, title, price }) => (
        <Product
          id={id}
          link={link}
          alt={alt}
          title={title}
          price={price}
          submit={addProduct}
          key={id}
        />
      ))}
    </div>
  );
};

export default Shop;
