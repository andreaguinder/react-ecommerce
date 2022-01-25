import React from "react"
import {useContext} from 'react';
import { CartContext } from "./CartContext";
import { Container, Row, Col } from 'react-bootstrap';

const TotalTodo = () => {

    const {contadorProductos, precioTotal} = useContext(CartContext)
    return (

        <div className="divCentrado">
        <Container fluid style={{background: "white",}}>
            <Row>
            <Col className="divCentrado">Cantidad de productos{contadorProductos()> 0 && <p className="m-3">{contadorProductos()}</p>}</Col>
            <Col className="divCentrado">Precio total de productos ${precioTotal()> 0 && <p className="m-3">{precioTotal()}</p>}</Col>
            </Row>
        </Container>
        </div>

    )
}

export default TotalTodo;