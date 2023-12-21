// ShoppingCart.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productDetails } from './App'
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Fetch selected items from local storage
    const storedItems = JSON.parse(localStorage.getItem('productsSelected')) || [];
    setSelectedItems(storedItems);
  }, []);

  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/ThankYou');
  };

  const ClearKart = () => {
    localStorage.clear();
    setSelectedItems([]);
  }

  let IncreaseQuatity = (id) => {
    var newStoredItems = selectedItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    console.log("productsSelected:", newStoredItems);
    localStorage.setItem("productsSelected", JSON.stringify(newStoredItems));
    setSelectedItems(newStoredItems);
  }

  let DecreaseQuatity = (id) => {
    var newStoredItems = selectedItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
    console.log("productsSelected:", newStoredItems);
    localStorage.setItem("productsSelected", JSON.stringify(newStoredItems));
    setSelectedItems(newStoredItems);
  }

  return (
    <div className="shopping-cart-container">
      <button onClick={ClearKart}>
        Clear
      </button>
      <h3 className="shopping-cart-title">Shopping Cart</h3>
      {selectedItems.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <div>
          <ul className="shopping-cart-list">
            {selectedItems.map((item, index) => (
              <li key={index} className="shopping-cart-item">
                <img src={item.image} alt={item.name} className="shopping-cart-image" />
                <div>
                  <strong className="shopping-cart-name">{item.name}</strong>
                  <p>Price: {item.price}</p>
                </div>
                <div>
                <button onClick={() => IncreaseQuatity(item.id)} className=" m-2 shopping-cart-button">+</button>

                
                {item.quantity}
                <button onClick={() => DecreaseQuatity(item.id)} className=" m-2 shopping-cart-button">-</button>
                </div>
              </li>

            ))}
          </ul>
          <p className="total-price">Total Price: ${calculateTotalPrice()}</p>
          <button onClick={handleSignIn} className="shopping-cart-button">Proceed to Checkout</button>

        </div>
      )}
    </div>
  );
};

export default ShoppingCart;




