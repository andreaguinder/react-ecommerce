
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {CartContext} from "./CartContext"

const CartItem = ({ producto, borrarItem, contadorProductos, precioTotal }) => {
  return (
    <Card>
      <Container>
        <Row>
          <Col>{producto.item.nombre}</Col>
          <Col>Cantidad :{producto.count}</Col>
          <Col>Precio Individual ${producto.item.precio}</Col>
          <Col>Precio Cantidad ${producto.item.precio*(producto.count)}</Col>
          <Col>
            <Button className="buttonVerMas btn-secondary btn" onClick={() => borrarItem(producto.item.id)}>Borrar Item</Button>
          </Col>
        </Row>
      </Container>
    </Card>

  );
};

export default CartItem;

