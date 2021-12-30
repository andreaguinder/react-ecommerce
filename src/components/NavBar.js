import React from "react"
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
    <>
        <header>
                <div>
                    <a className="facebook mx-1" href="https://www.facebook.com/profile.php?id=100010447723135"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="instagram mx-1" href="https://www.instagram.com/andreaguinder/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a className="behance mx-1" href="https://www.behance.net/andreaguinder"><FontAwesomeIcon icon={faBehance}/></a>
                    <p>Buscador</p>
                </div>
            <div>
                <img id="logoNavBar" src="logo-alyssa.png" alt="Logo Alyssa"/>
            </div>
            <div>
                <nav>
                    <a href="#" className="mx-1"><FontAwesomeIcon icon={faUser}/></a>
                    <a href="#" className="mx-1"><FontAwesomeIcon icon={faHeart}/></a>
                    <a href="#" className="mx-1"><CartWidget/></a>
                </nav>
            </div>
        </header>
    </>
    )
}

export default NavBar
