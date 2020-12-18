import React from 'react';

import '../styles/About.css';

const About = (props) => {
  return (
    <div className="container card">
      <h1>About Us</h1>
      <h2>What is Champagne?</h2>
      <p>
        Champagne is a sparkling wine from the Champagne wine region of France.
        This alcoholic drink is produced from specific types of grapes grown in
        the Champagne region following rules that demand, among other things,
        specific vineyard practices, sourcing of grapes exclusively from
        designated places within the Champagne region, specific grape-pressing
        methods and secondary fermentation of the wine in the bottle to cause
        carbonation.
      </p>
      <h2>Who are we?</h2>
      <p>
        We are a small sized Champagne resale company based in France. Our stock
        consists of a variety of leading Champagne brands. With our selection of
        Champagne, you'll surely be spoilt for choice!
      </p>
      <h2>Contact Us</h2>
      <div className="inline">
        <i className="fas fa-phone"></i>
        <p>+33 123 456 7890</p>
      </div>
      <div className="inline">
        <i className="fas fa-envelope"></i>
        <p>info@vintagechampagne.com</p>
      </div>
    </div>
  );
};

export default About;
