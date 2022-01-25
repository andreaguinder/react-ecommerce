import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const NavBar = () => {
  const crearUsuario = () => {
    Swal.fire({
      title: "Ingresa tu nombre nombre y apellido",
      input: "text",
      text1: "Ingresa tu mail",
      input2: "text",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      inputValidator: (nombre) => {
        if (!nombre) {
          return "Por favor escribe tu nombre";
        } else {
          return undefined;
        }
      },
    }).then((resultado) => {
      if (resultado.value) {
        let nombre = resultado.value;
        console.log("Hola, " + nombre);
      }
    });
  };

  return (
    <>
      <nav className="navbar navBar navbar-expand-lg navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-5">
              <li className="nav-item">
                <Link
                  to="https://www.facebook.com/profile.php?id=100010447723135"
                  className="linksEstilo linkRed"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="https://www.instagram.com/andreaguinder/"
                  className="linksEstilo mx-4 linkRed"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="https://www.behance.net/andreaguinder"
                  className="linksEstilo linkRed"
                >
                  <FontAwesomeIcon icon={faBehance} />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <img
                    src="/marca-alyssa-web.svg"
                    alt="Logo Alyssa"
                    className="logoAlychico mx-5"
                    style={{ width: "40%", marginTop: "0" }}
                  ></img>
                </Link>
              </li>
              <li>
                <Link to="/" className="linksEstilo mx-4 linkPrincipal">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="" aria-label="Show SweetAlert2 success message" onClick={crearUsuario} className="linksEstilo linkPrincipal mx-5">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
              <li>
                <Link to="/src/components/Carrito.js" className="linksEstilo linkPrincipal mx-4 my-0">
                  <CartWidget className="cartWidget"/>
                </Link>
              </li>
              <div class="dropdown">
                <button
                  title="Categorías"
                  class="btn btn-secondary dropdown-toggle ml-2"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <Link
                      to="/categoria/Cuadros"
                      className="linksEstilo dropdown-item linkCate"
                    >
                      Cuadros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/categoria/Velas y Aromatizantes"
                      className="linksEstilo dropdown-item linkCate"
                    >
                      Velas y Aromatizantes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/categoria/Papelería"
                      className="linksEstilo dropdown-item linkCate"
                    >
                      Papelería
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
