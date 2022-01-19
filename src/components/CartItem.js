
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CartItem = ({ producto, borrarItem, borrarTodo }) => {
  return (
    <Card>
      <Container>
        <Row>
          <Col>{producto.item.nombre}</Col>
          <Col>Cantidad :{producto.count}</Col>
          <Col>${producto.item.precio}</Col>
          <Col>
            <Button className="buttonVerMas btn-secondary btn" onClick={() => borrarItem(producto.item.nombre)}>Borrar Item</Button>
          </Col>
        </Row>
      </Container>
      <Row>
        <Button className="buttonVerMas btn-secondary btn" style={{alignItems: 'center', justifyContent: 'space-around', width: '10%', margin: '0.5rem'}} onClick={() => borrarTodo(producto.nombre)}>Vaciar Carrito</Button>
      </Row>
    </Card>
  );
};

export default CartItem;

