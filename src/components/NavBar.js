import React from "react"
import CartWidget from "./CartWidget";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';





const NavBar = () => {

  const crearUsuario = () => {
    Swal
    .fire({
        title: "Ingresa tu nombre nombre y apellido",
        input: "text",
        text1: "Ingresa tu mail",
        input2: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        inputValidator: nombre => {
            // Si el valor es válido, debes regresar undefined. Si no, una cadena
            if (!nombre) {
                return "Por favor escribe tu nombre";
            } else {
                return undefined;
            }
        }
    })
    .then(resultado => {
        if (resultado.value) {
            let nombre = resultado.value;
            console.log("Hola, " + nombre);
        }
    });
  }


    return (
        <>
    <Navbar className="navBar">
      <Container fluid>

        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
          <Nav.Link><Link to='https://www.facebook.com/profile.php?id=100010447723135' className="linksEstilo"><FontAwesomeIcon icon={faFacebook}/></Link></Nav.Link>
          <Nav.Link><Link to='https://www.instagram.com/andreaguinder/' className="linksEstilo mx-4"><FontAwesomeIcon icon={faInstagram}/></Link></Nav.Link>
          <Nav.Link><Link to='https://www.behance.net/andreaguinder' className="linksEstilo"><FontAwesomeIcon icon={faBehance}/></Link></Nav.Link>

          
                
                

          <Navbar.Brand as='span'><Link to='/'><img src="/marca-alyssa-web.svg" alt="Logo Alyssa" style={{width: "40%", marginTop: "0"}}></img></Link></Navbar.Brand>

            <Nav.Link><Link to='/' className="linksEstilo">Inicio</Link></Nav.Link>
            <Nav.Link><Link aria-label="Show SweetAlert2 success message" onClick={crearUsuario} className="linksEstilo"><FontAwesomeIcon icon={faUser}/></Link></Nav.Link>
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

export default NavBar;
