import React from "react";
import Logo from '../../Logo.svg'
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import Button from 'react-bootstrap/Button'
import "./navbar.css"
function Navigation() {
  return (
    <div className="navigation">
      <Navbar className='navBar'>
        
        <Navbar.Brand href="#home">
          <Navbar.Brand href="#home">
            <Image src={Logo}></Image>
          </Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className=" d-flex  justify-content-end">
            <Nav.Link href="#home">Destination</Nav.Link>
            <Nav.Link href="#link">Hotels</Nav.Link>
            <Nav.Link href="#link">Flights</Nav.Link>
            <Nav.Link href="#link">Bookings</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Button className="button" href="#link">
              Signup
            </Button>
            
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
    </div>
  );
}
export default Navigation;
