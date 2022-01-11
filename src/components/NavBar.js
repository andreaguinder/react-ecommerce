import React from "react"
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const categoria = ["cuadros", "velaYaroma", "papeleria"];

    return (
        <>
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand as='span'><Link to='/public/logo-alyssa.png'></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2"><CartWidget/></Nav.Link>
            <NavDropdown title="categorías" id="navbarDropdown">
              <NavDropdown.Item as='span'><Link to='/categoria/cuadros'>Cuadros</Link></NavDropdown.Item>
              <NavDropdown.Item as='span'><Link to='/categoria/velasYaroma'>Velas y Aromatizantes</Link></NavDropdown.Item>
              <NavDropdown.Item as='span'><Link to='/categoria/papeleria'>Papelería</Link></NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>         
    )
}

export default NavBar
