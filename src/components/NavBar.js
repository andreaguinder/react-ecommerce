import React from "react"
import CartWidget from "./CartWidget";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
    <Navbar>
      <Container fluid>
      <Navbar.Brand as='span'><Link to='/public/logo-alyssa.png'></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link><Link to='/' className="linksEstilo">Inicio</Link></Nav.Link>
            <Nav.Link><Link to='/src/components/Carrito.js' className="linksEstilo"><CartWidget/></Link></Nav.Link>
            <NavDropdown title="Categorías" id="navbarDropdown" className="linksEstilo">
              <NavDropdown.Item as='span'><Link to='/categoria/cuadros' className="linksEstilo linkCate">Cuadros</Link></NavDropdown.Item>
              <NavDropdown.Item as='span'><Link to='/categoria/velasYaroma' className="linksEstilo linkCate">Velas y Aromatizantes</Link></NavDropdown.Item>
              <NavDropdown.Item as='span'><Link to='/categoria/papeleria' className="linksEstilo linkCate">Papelería</Link></NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>         
    )
}

export default NavBar
