import React from "react";
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {db} from "./firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import  Loader from "./Loader";
import Swal from "sweetalert2";

const ItemListContainer = ({titulo}) => {

    const [lista, setLista] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    
    useEffect(() => {
        if(id){
            const coleccionProductos = collection(db,"productos")
            const filtro = where("categoria","==",id)
            const consulta = query(coleccionProductos,filtro)
            const pedido = getDocs(consulta)
            pedido
                .then((resultado)=>{
                    setLista(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                    setLoading(false)
                })
                .catch((error)=>{
                    Swal.fire(error)
                })
        
        }else {
            const coleccionProductos = collection(db,"productos")
            const pedido = getDocs(coleccionProductos)
            pedido
                .then((resultado)=>{
                    setLista(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                    setLoading(false)
                })
                .catch((error)=>{
                    Swal.fire(error)
                })
        }
    },[id])

        return (
        <>
        <div className="divCentrado">
            <h2>{titulo}</h2>
            <img src="/marca-alyssa-web.svg" alt="Logo Alyssa" style={{ width: "40%", marginTop: "0", justifyContent: "space-around"}}></img>
        </div>
        <div className="divCentrado">
            {loading ? <Loader /> : <ItemList lista={lista}/>}
        </div>
        </>
        )
}

export default ItemListContainer;