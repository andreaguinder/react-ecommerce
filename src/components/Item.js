import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={item.img} width="100px" height="200px" />
      <Card.Body
        style={{
          display: "flex",
          flexFlow: "column",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <div className="text-center">Stock {item.stock} </div>
          <div className="text-center">Precio ${item.precio}</div>
        </Card.Text>
        <Link className="btn btn-secondary" to={`/item/${item.id}`}>
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
