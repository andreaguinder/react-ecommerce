import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <>
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Title className="text-center m-3">{product.nombre}</Card.Title>
      <Container height="400px">
      <Card.Img variant="top" src={product.img} width="auto" height="300px" overflow-y="hidden" />
      </Container>
      <Card.Body
        style={{
          display: "flex",
          flexFlow: "column",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >

        <Card.Text>
          <div className="text-center">Precio ${product.precio}</div>
        </Card.Text>
        <Link className="btn btn-secondary" to={`/item/${product.id}`}>
          Ver más
        </Link>
      </Card.Body>
    </Card>
    </>
  );
};

export default Item;
