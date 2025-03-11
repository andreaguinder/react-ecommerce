import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Loader from "./Loader";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [added, setAdded] = useState(false);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  const { addtoCart } = useContext(CartContext);

  useEffect(() => {
    if (!id) {
      Swal.fire("ID no válido");
      return;
    }
  
    const fetchProducto = async () => {
      try {
        const response = await fetch("/base.json");
        const productos = await response.json();
  
        const productoEncontrado = productos.find((prod) => prod.id.toString() === id);
  
        if (productoEncontrado) {
          setProducto(productoEncontrado);
        } else {
          Swal.fire("Producto no encontrado");
        }
      } catch (error) {
        Swal.fire("Error al cargar el producto: " + error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducto();
  }, [id]); 
  const onAdd = (count) => {
    addtoCart(producto, count);
    setAdded(true);
  };

  return (
    <div className="divCentrado">
      {loading ? <Loader /> : <ItemDetail onAdd={onAdd} producto={producto} added={added} />}
    </div>
  );
};

export default ItemDetailContainer;
