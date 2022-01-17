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
