import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';

import Home from './Components/Home';
import Shop from './Components/Shop';
import About from './Components/About';
import Cart from './Components/Cart';

import productData from './data/products.json';
import './styles/App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData.products);
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <nav className="container navigation">
          <Link className="nav-home" to="/">
            Home
          </Link>
          <ul>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <i class="fas fa-shopping-cart"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact from="/" component={Home} />
          <Route
            from="/shop"
            render={(props) => <Shop {...props} products={products} />}
          />
          <Route from="/about" component={About} />
          <Route from="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
