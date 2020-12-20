import React, { useState, useEffect } from 'react';
import Product from './Product';

import '../styles/Shop.css';
import productData from '../data/products.json';

const Shop = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData.products);
  }, []);

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
