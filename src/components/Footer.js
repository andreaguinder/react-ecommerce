import { Link } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';
const FooterConst = () => {
    return (
    <Container id='footer' fluid style={{width: "100", height: "auto", marginBottom: "0", alignItems: "center"}}>
                <Col style={{display: "flex", flexFlow: "column", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                    <Link to='#' className="linksEstilo">Legales</Link>
                    <Link to='#' className="linksEstilo">Nosotros</Link>
                    <Link to='#' className="linksEstilo">¿Cómo Comprar?</Link>
                </Col>
                <Col style={{display: "flex", flexFlow: "column", flexWrap: "wrap", justifyContent: "space-evenly",}}>
                    <p>Diseño y Desarrollo por </p><a href='https://andreaguinder.github.io/portfolio-guinderandrea/' className="linksEstilo miNombre">Andrea Guinder</a>
                </Col>
                <Col style={{display: "flex", flexFlow: "column", flexWrap: "wrap", justifyContent: "space-evenly",}}>
                    <p>Tel: (+54) 11 6867 5242</p>
                    <p>Av.O Higgins 247 - Haedo</p>
                    <p>alyssa.cuadros@gmail.com</p>
                </Col>
        </Container>
    )
}

export default FooterConst;