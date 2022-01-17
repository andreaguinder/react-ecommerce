import { Link } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';
const FooterConst = () => {
    return (
    <>
    <Container fluid style={{width: "100", height: "auto",}}>
        <footer>
                <Col style={{display: "flex", flexFlow: "column", flexWrap: "wrap", justifyContent: "space-evenly",}}>
                    <Link to='#' className="linksEstilo">Legales</Link>
                    <Link to='#' className="linksEstilo">Nosotros</Link>
                    <Link to='#' className="linksEstilo">¿Cómo Comprar?</Link>
                </Col>
                <Col style={{display: "flex", flexFlow: "column", flexWrap: "wrap", justifyContent: "space-evenly",}}>
                    <Link to='./public/logo-alyssa.png'></Link>
                    <p>Diseño y Desarrollo por <b><a href="https://andreaguinder.github.io/portfolio-guinderandrea/">Andrea Guinder</a></b></p>
                </Col>
                <Col style={{display: "flex", flexFlow: "column", flexWrap: "wrap", justifyContent: "space-evenly",}}>
                    <p>Tel: (+54) 11 6867 5242</p>
                    <p>Av.O Higgins 247 - Haedo</p>
                    <p>alyssa.cuadros@gmail.com</p>
                </Col>
        </footer>
        </Container>
    </>
    )
}

export default FooterConst;