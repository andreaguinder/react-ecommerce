import React from "react"
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'




/*
const NavBar = () => {
return (
<div className='App'>
    <h1>App</h1>
</div>


)




}

*/
function NavBar (){
    return (
    <>
        <header>
                <div>
                    <a target="_blank" className="facebook" href="https://www.facebook.com/profile.php?id=100010447723135"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a target="_blank" className="instagram" href="https://www.instagram.com/andreaguinder/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a target="_blank" className="behance" href="https://www.behance.net/andreaguinder"><FontAwesomeIcon icon={faBehance}/></a>
                    <p>Buscador</p>
                </div>
            <div>
                <img src="./components/img/logo-alyssa.png"/>
            </div>
                <nav>
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faUser}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                        <li><CartWidget/></li>
                    </ul>
                </nav>
        </header>
    </>
    )
}

export default NavBar
