import NavBar from "./NavBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <header>
            <div>
                    <a className="facebook mx-3" href="https://www.facebook.com/profile.php?id=100010447723135"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="instagram mx-3" href="https://www.instagram.com/andreaguinder/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a className="behance mx-3" href="https://www.behance.net/andreaguinder"><FontAwesomeIcon icon={faBehance}/></a>
            </div>
            <img id="logoNavBar" className="text-center" src="logo-alyssa.png"/>
            <NavBar/>
        </header>
    )
}

export default Header
