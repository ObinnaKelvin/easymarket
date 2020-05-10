import React from 'react'
import logo from '../../src/logo2.svg';
import {Nav, Navbar} from 'react-bootstrap';
//import NavigationBar from '../styles/Navigation.css';

const navbar = {
    background: "white",
    color: "#E60D98",
    boxShadow: "-1px 11px 14px -10px rgba(0,0,0,0.53)",
};
const navbarBrand = {
    color: "#E60D98",
}
const navbarText = {
    color: "#E60D98",
}

function Navigation() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" 
        //bg="white" variant="white" 
        style={navbar}
        >
                <Navbar.Brand href="#home" style={navbarBrand}>
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                Easy Market
                {/* {' Easy Market'} */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    {/* <Nav className="mr-auto" style={navbarText}>
                    <Nav.Link href="#features">Contact Us</Nav.Link>
                    <Nav.Link href="#features">Become a Supplier</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav> */}
                    <Nav>
                    <Nav.Link href="#deets" style={navbarText}>Contact Us</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Become a Supplier
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
