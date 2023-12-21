import React from 'react';
import './ThankYou.css';

const generateRandomOrderId = () => {
  return Math.floor(Math.random() * 1000000) + 1; 
};

const ThankYou = () => {
  const orderId = generateRandomOrderId();

  return (
    <div className="ThankYou-container">
      <h2>Thank You for Purchasing!</h2>
      <p>Your order has been successfully processed.</p>
      <p className="order-id">Order ID: {orderId}</p>
    </div>
  );
};

export default ThankYou;
