import React from "react";
import second, { CartWidget } from "../CartWidget";
import{Container, Nav, Navbar, NavDropdown, Form, Button}from'react-bootstrap'


export const NavBar = () => {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mundo Electronico</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Productos">Productos</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cartwidget"><CartWidget /> 1</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

