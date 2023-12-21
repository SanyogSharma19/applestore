import React, { useState } from 'react';
import { BrowserRouter as Router, json } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import MyRoutes from './MyRoutes';

const App = () => {
  let [selectedItems, setSelectedItems] = useState([]);
  const productDetails = [
    { id: 1, name: 'iPhone 15 PRO', image: 'iphone_image1.jpg', price: 999, type: 'phone' },
    { id: 2, name: 'iPhone 15', image: 'iphone_image2.jpg', price: 1199, type: 'phone' },
    { id: 3, name: 'Airpods Pro', image: 'iphone_image3.jpg', price: 399, type: 'ear' },
    { id: 4, name: 'Airpods Gen 2', image: 'iphone_image4.jpg', price: 399, type: 'ear' },
    { id: 5, name: 'Macbook Air', image: 'iphone_image5.jpg', price: 1399, type: 'laptop' },
    { id: 6, name: 'Macbook Pro', image: 'iphone_image6.jpg', price: 1599, type: 'laptop' },
    { id: 7, name: 'APPLE WATCH ULTRA', image: 'iphone_image7.jpg', price: 1399, type: 'watch' },
    { id: 8 , name: 'APPLE WATCH 9', image: 'iphone_image8.jpg', price: 599, type: 'watch' }

  ];

  const addToCart = (selectedProduct) => {

    console.log("selectedProduct:",selectedItems);
    var fromlocal  = JSON.parse(localStorage.getItem("productsSelected"));

  
    selectedProduct.quantity = 1;
    if( fromlocal ){

      var temo = fromlocal.filter(ele=>ele.id === selectedProduct.id);
      console.log("temo->",temo);
      if( temo.length == 0){  

        fromlocal.push(selectedProduct);
        localStorage.setItem("productsSelected",JSON.stringify(fromlocal));
        setSelectedItems([...fromlocal])
      }
    }else{
      localStorage.setItem("productsSelected",JSON.stringify([selectedProduct]));
      setSelectedItems([selectedProduct])
    }
   
  };

  console.log("app");
  return (
    <div>
      <Header />
      <MyRoutes selectedItems={selectedItems} productDetails={productDetails} addToCart={addToCart} />
    </div>
  );
};

export default App;



