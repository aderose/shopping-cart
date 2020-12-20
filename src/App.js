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
  const [basket, setBasket] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    setProducts(productData.products);
  }, []);

  useEffect(() => {
    setGrandTotal(
      basket.reduce((total, item) => total + item.price * item.quantity, 0),
    );
  }, [basket]);

  const handleCartChange = (id) => (event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity === 0) {
      setBasket(basket.filter((item) => item.id !== id));
    } else {
      setBasket(
        basket.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: newQuantity,
              total: newQuantity * item.price,
            };
          } else {
            return item;
          }
        }),
      );
    }
  };

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
                <i className="fas fa-shopping-cart"></i>
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
          <Route
            from="/cart"
            render={(props) => (
              <Cart
                {...props}
                basket={basket}
                grandTotal={grandTotal}
                onChange={handleCartChange}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
