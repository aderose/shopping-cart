import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';

import Home from './Components/Home';
import Shop from './Components/Shop';
import About from './Components/About';
import Cart from './Components/Cart';
import Notification from './Components/Notification';

import productData from './data/products.json';
import './styles/App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [hasSucceeded, setHasSucceeded] = useState(false);

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
            };
          } else {
            return item;
          }
        }),
      );
    }
  };

  const addProduct = ({ id, quantity }) => {
    const product = products.find((product) => product.id === id);
    const cartItem = basket.find((item) => item.id === id);
    if (cartItem === undefined) {
      setBasket([
        ...basket,
        {
          id,
          title: product.title,
          price: product.price,
          quantity,
        },
      ]);
    } else {
      setBasket(
        basket.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: Math.min(item.quantity + quantity, 99),
            };
          } else {
            return item;
          }
        }),
      );
    }
    setHasSucceeded(true);
    setTimeout(() => setHasSucceeded(false), 5000);
  };

  return (
    <div className="app">
      {!hasSucceeded || (
        <Notification message="Product has been successfully added!" />
      )}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
              <NavLink className="cart-products" to="/cart">
                <i className="fas fa-shopping-cart"></i>
                <p>{basket.length}</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact from="/" component={Home} />
          <Route
            from="/shop"
            render={(props) => (
              <Shop {...props} products={products} addProduct={addProduct} />
            )}
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
