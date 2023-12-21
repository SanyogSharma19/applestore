import React from 'react';
import { Button, Card } from 'react-bootstrap';
import ShoppingCart from './ShoppingCart';
import './Watch.css'; 

const Watch = ({ selectedItems, productDetails, addToCart }) => {
  console.log("productDetails:", productDetails);
  return (
    <div className="IPhone-container">
      <h2>Watch Page</h2>
      {productDetails.map((product) => (
        (product.type === "watch")?
        <div key={product.id} className="Watch-card">
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

export default Watch;
