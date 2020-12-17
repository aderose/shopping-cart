import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';

import Home from './Components/Home';
import Shop from './Components/Shop';
import About from './Components/About';

import './styles/App.css';

const App = () => {
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
          </ul>
        </nav>
        <Switch>
          <Route exact from="/" component={Home} />
          <Route from="/shop" component={Shop} />
          <Route from="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
