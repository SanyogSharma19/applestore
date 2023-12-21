import React from 'react';
import { Button, Card } from 'react-bootstrap';
import ShoppingCart from './ShoppingCart';
import './AirPods.css'; 

const AirPods = ({ selectedItems, productDetails, addToCart }) => {
  console.log("productDetails:", productDetails);
  return (
    <div className="AirPods-container">
      <h2>AirPods Page</h2>
      {productDetails.map((product) => (
        (product.type === "ear")?
        <div key={product.id} className="AirPods-card">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Price:$ {product.price}</Card.Text>
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </div>:null
      ))}
    </div>
  );
};

export default AirPods;