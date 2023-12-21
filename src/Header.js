import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import './Header.css'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value.toLowerCase();

   
    switch (searchTerm) {
      case 'iphone':
        navigate('/IPhone');
        break;
      case 'macbook':
        navigate('/MacBook');
        break;
      case 'apple watch':
        navigate('/Watch');
        break;
      case 'airpods':
        navigate('/Airpods');
        break;
      default:
        
        navigate('/');
        break;
    }
  };

  return (
    <Navbar expand="lg" variant="dark" className="header-navbar">
      {/* Brand */}
      <Navbar.Brand href="/" className="header-brand">
        <img
          src="https://img.icons8.com/?size=160&id=bN2IQyaCUVk5&format=png" 
          alt="Apple Logo"
          height="30"
          className="d-inline-block align-top"
        />
        Apple
      </Navbar.Brand>

     
      <Navbar.Collapse id="navbar-nav" className="header-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/IPhone">IPhone</Nav.Link>
          <Nav.Link href="/MacBook">MacBook</Nav.Link>
          <Nav.Link href="/Watch">Watch</Nav.Link>
          <Nav.Link href="/airpods">AirPods</Nav.Link>
        </Nav>

       
        <Form inline onSubmit={handleSearch} className="combined-search-bar">
          <FormControl type="text" name="searchTerm" placeholder="Search" className="mr-sm-2" />
          <Button type="submit" variant="outline-light">Search</Button>
        </Form>

    
        <Button onClick={() => navigate('/cart')} variant="outline-light">Shopping Cart</Button>
        <Button onClick={() => navigate('/login')} variant="outline-light">Login</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;



