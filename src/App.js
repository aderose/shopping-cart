import React from 'react';
import Home from './Components/Home';
import Shop from './Components/Shop';
import About from './Components/About';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';

import './styles/App.css';

const App = () => {
  return (
    <div
      className="
  bg-no-repeat bg-bottom bg-cover h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1456441240751-2a368527053f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400")`,
      }}
    >
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
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
          <Route exact from="/shop" component={Shop} />
          <Route exact from="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
