import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Swal from "sweetalert2";

const ItemListContainer = ({ titulo }) => {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/base.json");  
        const productos = await response.json();
  
        let filteredProductos = productos;
  
        if (id) {
          filteredProductos = productos.filter((prod) => prod.categoria === id);
        }
  
        setLista(filteredProductos);
      } catch (error) {
        Swal.fire("Error al cargar los productos: " + error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProductos();
  }, [id]);

  return (
    <>
      <div className="divCentrado">
        <h2>{titulo}</h2>
        <img
          src="/marca-alyssa-web.svg"
          alt="Logo Alyssa"
          style={{ width: "20%", marginTop: "-3rem", marginBottom: "-3rem", justifyContent: "space-around" }}
          class= "logo-alyssa"
        />
      </div>
      <div className="divCentrado">
        {loading ? <Loader /> : <ItemList lista={lista} />}
      </div>
    </>
  );
};

export default ItemListContainer;
