import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";


const ItemDetail  = ({producto, onAdd, added}) => {

    return (
    <>
        <Container   className="divCentrado">
            <Row>
                <Col  style={{display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}><h3>{producto.nombre}</h3>
                    <img src={producto.img} alt={producto.nombre} width="50%"/>
                </Col>
                <Col style={{display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <p>Categoría: {producto.categoria} </p>
                    <p>Precio: ${producto.precio} </p>
                    <p>{producto.detalle}</p>
                    { added ?
                    
                        <Link to='/carrito'><Button className='buttonVerMas btn btn-secondary'>¡Agregado! Ir al carrito</Button></Link>
                    
                    
                    : <ItemCount stock= {producto.stock} initial={1} onAdd={onAdd} />}
                        <Link className='btn btn-secondary' to={`/`}>Volver a Inicio</Link>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default ItemDetail;


