import NavBar from "./NavBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { Container, Col, Row } from "react-bootstrap"

const Header = () => {
    return (
    <>
        <header>
            <Container className="my-1">
                <Row>
                <Col className="my-3">
                <Link to='https://www.facebook.com/profile.php?id=100010447723135' className="linksEstilo"><FontAwesomeIcon icon={faFacebook}/></Link>
                <Link to='https://www.instagram.com/andreaguinder/' className="linksEstilo mx-4"><FontAwesomeIcon icon={faInstagram}/></Link>
                <Link to='https://www.behance.net/andreaguinder' className="linksEstilo"><FontAwesomeIcon icon={faBehance}/></Link>
                </Col>
                <Col>
                <Link to='/'><img src="/logo-alyssa.png" alt="Logo Alyssa" style={{width: "40%"}}></img></Link>
            </Col>
            <Col>
            <NavBar/>
            </Col>
            </Row>
            </Container>
        </header>
    </>
    )
}

export default Header
