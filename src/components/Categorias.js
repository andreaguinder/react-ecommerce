/*

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase"
import { collection , getDocs , query , where } from "firebase/firestore"
import { Link } from "react-router-dom"

function Categorias() {
    //Uso del useState y useEffect para la promesa
    const [categoriaElegida, setCategoria] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        if(categoria){
            const coleccionProductos = collection(db,"productos", "Cuadros")
            const filtro = where("categoria","==",categoria)
            const consulta = query(coleccionProductos,filtro)
            const pedido = getDocs(consulta)
            pedido
                .then((resultado)=>{
                    setCategoria(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                })
                .catch((error)=>{
                    console.log(error)
                })
        }else {
            const coleccionProductos = collection(db,"productos")
            const pedido = getDocs(coleccionProductos)
            pedido
                .then((resultado)=>{
                    setCategoria(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }, [categoria])


        return(
            categoriaElegida.map((elemento, indice) => {
                return(
                    <div key={indice}>
                        <div>
                            <img src={elemento.img} alt={elemento.titulo} />
                            <h1>{elemento.titulo}</h1>

                            <Link to={`/item/${elemento.id}`} className="buttonVerMas">Ver más</Link>
                        </div>
                    </div>
                )
            })
        )
    }


export default Categorias;


*/