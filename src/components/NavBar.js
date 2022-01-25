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
      <nav className="navbar navBar navbar-expand-lg navbar-light" id="navOrden">
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
            <div className="navbar-nav">
              <div>
                <Link
                  to="https://www.facebook.com/profile.php?id=100010447723135"
                  className="linksEstilo linkRed nav-item"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>

                <Link
                  to="https://www.instagram.com/andreaguinder/"
                  className="linksEstilo mx-4 linkRed nav-item"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>

                <Link
                  to="https://www.behance.net/andreaguinder"
                  className="linksEstilo linkRed nav-item"
                >
                  <FontAwesomeIcon icon={faBehance} />
                </Link>
                </div>
                <div>
                <Link className="nav-item" to="/">
                  <img
                    src="/marca-alyssa-web.svg"
                    alt="Logo Alyssa"
                    className="logoAlychico mx-5"
                    style={{ width: "30%", marginTop: "0" }}
                  ></img>
                </Link>
                </div>
                <div>
                <Link to="/" className="linksEstilo mx-4 linkPrincipal">
                  Inicio
                </Link>

                <Link to="" aria-label="Show SweetAlert2 success message" onClick={crearUsuario} className="linksEstilo linkPrincipal mx-5">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
                </div>
                <Link to="/src/components/Carrito.js" className="linksEstilo cartEstilo mx-5">
                  <CartWidget/>
                </Link>

              </div>
              <div className="dropdown">
                <button
                  title="Categorías"
                  className="btn dropdown-toggle ml-2"
                  type="button"
                  id="cateBoton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </button>
                <div
                  className="dropdown-menu dropdown-menu-light"
                  aria-labelledby="dropdownMenuButton2"
                >

                    <Link
                      to="/categoria/Cuadros"
                      className="linksEstilo dropdown-item linkCate"
                    >
                      Cuadros
                    </Link>

                    <Link
                      to="/categoria/Velas y Aromatizantes"
                      className="linksEstilo dropdown-item linkCate"
                    >
                      Velas y Aromatizantes
                    </Link>

                    <Link
                      to="/categoria/Papelería"
                      className="linksEstilo dropdown-item linkCate"
                    >
                      Papelería
                    </Link>

</div>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
