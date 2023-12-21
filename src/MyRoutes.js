import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import IPhone from './IPhone';
import MacBook from './MacBook';
import Watch from './Watch';
import AirPods from './AirPods';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import ThankYou from './ThankYou';

const MyRoutes = ({ selectedItems, productDetails, addToCart }) => {
    console.log("MyRoutes");
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/IPhone" element={
                    <IPhone selectedItems={selectedItems} productDetails={productDetails} addToCart={addToCart} />} />
                <Route path="/cart" element={<ShoppingCart selectedItems={selectedItems} />} />
                <Route path="/airpods" element={<AirPods selectedItems={selectedItems} productDetails={productDetails} addToCart={addToCart} />} />
                <Route path="/MacBook" element={<MacBook selectedItems={selectedItems} productDetails={productDetails} addToCart={addToCart} />} />
                <Route path="/Watch" element={<Watch selectedItems={selectedItems} productDetails={productDetails} addToCart={addToCart} />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/ThankYou" element={<ThankYou/>} />
                
            </Routes>
        </div>
    );
};

export default MyRoutes;
