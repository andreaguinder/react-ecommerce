import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cartArray, deleteItem } = useContext(CartContext);

  return (
    <div>
      {cartArray.length === 0 && (
        <div>
          <p>No hay productos aún</p>
          <Link to="/">Ir al inicio</Link>
        </div>
      )}
      {cartArray.length > 0 &&
        cartArray.map((product) => (
          <CartItem
            key={product.item.id}
            product={product}
            deleteItem={deleteItem}
          />
        ))}
    </div>
  );
};

export default CartContainer;
