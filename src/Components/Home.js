import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css';

const Home = () => {
  return (
    <div className="container home">
      <h1 className="title">Vintage Champagne</h1>
      <p>With hundreds of Champagnes available, you'll be spoilt for choice!</p>
      <Link to="/shop" className="btn">
        Shop Now <i class="arrow fas fa-chevron-right"></i>
      </Link>
    </div>
  );
};

export default Home;
