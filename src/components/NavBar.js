import React from "react"
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
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
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                    <a href="#" className="mx-3"><FontAwesomeIcon icon={faUser}/></a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="mx-3"><FontAwesomeIcon icon={faHeart}/></a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="mx-3"><CartWidget/></a>
                    </li>
                  </ul>
                </div>
            </div>
          </nav>
        </>         
    )
}

export default NavBar
