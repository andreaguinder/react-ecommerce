import React from "react"
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
/*
const NavBar = () => {
    return (
    <>
        <header className="justify-content-space-around">
                <div>
                    <a className="facebook mx-3" href="https://www.facebook.com/profile.php?id=100010447723135"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="instagram mx-3" href="https://www.instagram.com/andreaguinder/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a className="behance mx-3" href="https://www.behance.net/andreaguinder"><FontAwesomeIcon icon={faBehance}/></a>
                    <p>Buscador</p>
                </div>
            <div>
                <img id="logoNavBar" src="logo-alyssa.png" alt="Logo Alyssa"/>
            </div>
            <div>
                <nav>
                    <a href="#" className="mx-3"><FontAwesomeIcon icon={faUser}/></a>
                    <a href="#" className="mx-3"><FontAwesomeIcon icon={faHeart}/></a>
                    <a href="#" className="mx-3"><CartWidget/></a>
                </nav>
            </div>
        </header>
    </>
    )
}
*/
const NavBar = () => {

  const categorías = ["cuadros", "Velas y Aromatizantes", "papelería"];

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
              <NavDropdown.Item as='span'><Link to='/cat/cuadros'>Cuadros</Link></NavDropdown.Item>
              <NavDropdown.Item as='span'><Link to='/cat/velasYaroma'>Velas y Aromatizantes</Link></NavDropdown.Item>
              <NavDropdown.Item as='span'><Link to='/cat/papeleria'>Papelería</Link></NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        {/*
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                    <a href="#" className="mx-3">Ingresar <FontAwesomeIcon icon={faUser}/></a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="mx-3">Favoritos <FontAwesomeIcon icon={faHeart}/></a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="mx-3">Carrito <CartWidget/></a>
                    </li>
                  </ul>
                </div>
            </div>
          </nav>
        */}
        </>         
    )
}

export default NavBar
