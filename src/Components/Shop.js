import React from 'react';
import Product from './Product';

import '../styles/Shop.css';

const Shop = (props) => {
  return (
    <div className="container shop">
      <h1>Our Products:</h1>
      <Product
        link="https://img2.pngio.com/champagne-bottle-png-transparent-image-moet-champagne-bottle-png-1200_1200.png"
        alt="Moet"
        title="Moet & Chandon Brut Imperial Non Vintage Champagne 75Cl"
        price="£29.00"
      />
      <Product
        link="https://img2.pngio.com/champagne-bottle-png-transparent-image-moet-champagne-bottle-png-1200_1200.png"
        alt="Moet"
        title="Moet & Chandon Brut Imperial Non Vintage Champagne 75Cl"
        price="£29.00"
      />
      <Product
        link="https://img2.pngio.com/champagne-bottle-png-transparent-image-moet-champagne-bottle-png-1200_1200.png"
        alt="Moet"
        title="Moet & Chandon Brut Imperial Non Vintage Champagne 75Cl"
        price="£29.00"
      />
    </div>
  );
};

export default Shop;
