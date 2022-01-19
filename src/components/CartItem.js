
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CartItem = ({ producto, borrarItem }) => {
  return (
    <Card>
      <Container>
        <Row>
          <Col>{producto.item.nombre}</Col>
          <Col>Cantidad :{producto.count}</Col>
          <Col>${producto.item.precio}</Col>
          <Col>
            <Button className="buttonVerMas btn-secondary btn" onClick={() => borrarItem(producto.item.id)}>Borrar Item</Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default CartItem;

