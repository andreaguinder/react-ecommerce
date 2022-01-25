import React from "react";
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {db} from "./firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

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
                    console.log(error)
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
                    console.log(error)
                })
        }
    },[id])

    if (loading) {
        return (
            <div className='loader'></div>
        )
    }else {
        return (
        <div>
            <h2>{titulo}</h2>
            <ItemList lista={lista}/>
        </div>
        )
    }
}
export default ItemListContainer;