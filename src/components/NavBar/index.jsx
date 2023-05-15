import React from "react";
import second, { CartWidget } from "../CartWidget";
import{Container, Nav, Navbar, NavDropdown, Form, Button}from'react-bootstrap'
import "./NavBar.css"
import { Link } from "react-router-dom";


export const NavBar = () => {
    return(
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Mundo Electronico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="tienda" id="basic-nav-dropdown" >
            <NavDropdown.Item href="/productos">productos</NavDropdown.Item>
              <NavDropdown.Item href="/productos/consolas">consolas</NavDropdown.Item>
              <NavDropdown.Item href="/productos/auriculares">Auriculares</NavDropdown.Item>
              <NavDropdown.Item href="/productos/relojes">Relojes</NavDropdown.Item>
              <NavDropdown.Item href="/productos/computadora">Computadora</NavDropdown.Item>
              <NavDropdown.Item href="/productos/celulares y accesorios">Celulares y accesorios</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/nosotros/nosotros">nosotros</Nav.Link>
            <Nav.Link href="/contacto/contacto">contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
            <Nav.Link href="#cartwidget"><CartWidget /> 1</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    );
}

