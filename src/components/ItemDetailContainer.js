
import {React, useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { db } from "./firebase";
import { collection, getDoc , doc } from "firebase/firestore";
import  Loader from "./Loader";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
    const [added, setAdded] = useState(false);
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const { addtoCart } = useContext(CartContext);

    useEffect(() => {

        const coleccionProductos = collection(db,"productos")
        const docRef = doc(coleccionProductos,id)
        const pedido = getDoc(docRef)

        pedido
        .then((resultado)=>{
            const producto = resultado.data()
            setProducto({...producto, id})
            setLoading(false)
        })
        .catch((error)=>{
            Swal.fire(error)
        })
    },[id])

const onAdd = (count) => {
    addtoCart(producto, count);
    setAdded(true); 
}

    return (
        <div className="divCentrado">
            {loading ? <Loader /> : <ItemDetail onAdd={onAdd} producto={producto} added={added}/>}
        </div>
    )
    }

export default ItemDetailContainer;




