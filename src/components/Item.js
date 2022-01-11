import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={product.image} width="100px" height="200px" />
      <Card.Body
        style={{
          display: "flex",
          flexFlow: "column",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <div className="text-center">Stock {product.stock} </div>
          <div className="text-center">Precio ${product.precio}</div>
        </Card.Text>
        <Link className="btn btn-secondary" to={`/item/${product.id}`}>
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
