import React from "react"
import CartWidget from "./CartWidget";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
    <Navbar>
      <Container fluid>

        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link><Link to='/' className="linksEstilo">Inicio</Link></Nav.Link>
            <Nav.Link><Link to='/src/components/Carrito.js' className="linksEstilo"><CartWidget/></Link></Nav.Link>
            <NavDropdown title="Categorías" id="navbarDropdown" className="linksEstilo">
            <Link to='/categoria/Cuadros' className="linksEstilo linkCate"><NavDropdown.Item as='span'>Cuadros</NavDropdown.Item></Link>
            <Link to='/categoria/Velas y Aromatizantes' className="linksEstilo linkCate"><NavDropdown.Item as='span'>Velas y Aromatizantes</NavDropdown.Item></Link>
            <Link to='/categoria/Papelería' className="linksEstilo linkCate"><NavDropdown.Item as='span'>Papelería</NavDropdown.Item></Link>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>         
    )
}

export default NavBar
