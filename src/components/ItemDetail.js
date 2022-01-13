import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import ItemCount from "./ItemCount";

const ItemDetail  = ({producto, onAdd, added}) => {
    return (
        <Container>
            <Row>
                <Col><h3>{producto.nombre}</h3>
                    <img src={producto.img} alt={producto.nombre} width="50%"/>
                </Col>
                <Col style={{display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <p>Precio: ${producto.precio} </p>
                    <p>{producto.detalle}</p>
                    { added ? <Link className='btn btn-secondary' to='/carrito'>¡Agregado! Ir al carrito</Link> : <ItemCount stock= {producto.stock} initial={1} onAdd={onAdd} />}
                        <Link className='btn btn-secondary' to={`/`}>Volver a Inicio</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail 