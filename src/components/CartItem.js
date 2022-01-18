import React from 'react'
import { Icon } from 'react';

const CartItem = ( { productos, borrarItem } ) => {
    return (
        <div className='elementos-carrito d-flex justify-content-center align-items-center mb-4'>
            <p><span>Producto:</span> { productos.item.nombre }</p>                    
            
            <p><span>Cantidad:</span> { productos.count}</p>                
            
            <p><span>Precio:</span> ${ productos.item.precio }</p>                   
            
            <Icon icon="ep:delete" color="red" className='icon-delete' onClick={() => borrarItem(productos.item.id)}/>                
        </div>
    )
}

export default CartItem;



/*
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CartItem = ({ producto, deleteItem }) => {
  return (
    <Card body>
      <Container>
        <Row>
          <Col>{producto.item.nombre}</Col>
          <Col>Cantidad :{producto.count}</Col>
          <Col>${producto.item.precio}</Col>
          <Col>
            <Button className="buttonVerMas" onClick={() => deleteItem(producto.id)}>Borrar Item</Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default CartItem;
*/
