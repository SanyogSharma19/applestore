import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
const Home = () => {
  const products = [  
    {
      id: 1,
      name: 'Iphone 15 pro',
      description: 'THE FASTEST IPHONE EVER MADE',
      image: 'iphone_image2.jpg',
    },
    {
      id: 2,
      name: 'Airpods Pro',
      description: 'The best sound from an EarPhone',
      image: 'iphone_image3.jpg',
    },
    {
      id: 3,
      name: 'MACBOOK PRO',
      description: 'The Most Complete Laptop ',
      image: 'iphone_image6.jpg',
    },    
  ];

  return (
    <div className="home-container">
      <div className="carousel-section">
        <Carousel>
          {products.map((product) => (
            <Carousel.Item key={product.id}>
              <img height={490} 
                className="d-block w-100"
                src={product.image}
                alt={product.name}                
              />
              <Carousel.Caption>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="footer">
        <p>&copy; 2023 Apple Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;





