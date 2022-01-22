import React from "react";
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {db} from "./firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

/*
const productos = [
    {id: 1, nombre: "Sueño causado por el vuelo...", precio: 5000, img: "/img/pruebaimg.jpg", categoria: "Cuadros"},
    {id: 2, nombre: "Anotador S/E", precio: 500, img: "/img/anotadores.jpg", categoria: "Papelería"},
    {id: 3, nombre: "Galatea de las Esferas", precio: 5000, img: "/img/tmp1091343711360516099.jpg", categoria: "Cuadros"},
    {id: 4, nombre: "Velas Strawberry", precio: 400, img: "/img/Velas mockup con trama.png", categoria: "Velas y Aromatizantes"},
    {id: 5, nombre: "Cuadro Naturaleza", precio: 800, img: "/img/fondo 2.jpg", categoria: "Cuadros"},
    {id: 6, nombre: "Difusores x 3", precio: 1500, img: "/img/difusoresportres.jpg", categoria: "Velas y Aromatizantes"},
    {id: 7, nombre: "Agenda 3 días por hoja", precio: 1000, img: "/img/agendas 2.jpg", categoria: "Papelería"},
    {id: 8, nombre: "Naturaleza Romántica", precio: 5000, img: "/img/81dfcfde8e103227c8e4cee88f9ffadc.jpg", categoria: "Cuadros"},
    {id: 9, nombre: "Difusores x 5", precio: 2000, img: "/img/difusores.jpg", categoria: "Velas y Aromatizantes"},
    {id: 10, nombre: "Cuadros Naturaleza x 3", precio: 12000, img: "/img/365ab63e9f8810bb416eb0b95e63bc85.jpg", categoria: "Cuadros"},
    {id: 11, nombre: "Tríptico Patrón Mandala", precio: 20000, img: "/img/29554.jpg", categoria: "Cuadros"},
    {id: 12, nombre: "Agenda día por hoja", precio: 2500, img: "/img/agendas.jpg", categoria: "Papelería"},
    {id: 13, nombre: "Sol Patrón Mandala", precio: 12000, img: "/img/61p9aQVM4lL._AC_SX466_.jpg", categoria: "Cuadros"},
    {id: 14, nombre: "Esencias para hornitos x 20", precio: 4500, img: "/img/aromatizantes-hornitos.jpg", categoria: "Velas y Aromatizantes"},
    {id: 15, nombre: "Mandala estilo Rústico", precio: 3000, img: "/img/mandalaegipcio.png", categoria: "Cuadros"},
    {id: 16, nombre: "Hornito Rosa c/velas y esencia", precio: 2000, img: "/img/aromatiz-convela.jpg", categoria: "Velas y Aromatizantes"},
    {id: 17, nombre: "Hornito rústico c/velas y esencias", precio: 4000, img: "/img/hornitorustico-diezvelas.jpg", categoria: "Velas y Aromatizantes"},
    {id: 18, nombre: "Hornito blanco c/velas y esencias", precio: 6000, img: "/img/hornito-diezvelas-unaesencia.jpeg", categoria: "Velas y Aromatizantes"},
    {id: 19, nombre: "Hornitos x 3 c/esencias y velas", precio: 10000, img: "/img/hornitosportres-velas.jpg", categoria: "Velas y Aromatizantes"},
    {id: 20, nombre: "Esencias para Hornito x 3", precio: 1500, img: "/img/IMG_GR_productos1576609973.jpg", categoria: "Velas y Aromatizantes"},
    {id: 21, nombre: "Agenda Motivadora", precio: 2000, img: "/img/agendas 3.jpg", categoria: "Papelería"},
    {id: 22, nombre: "Anotador Eco Cocina", precio: 800, img: "/img/anotadores eco de cocina.jpg", categoria: "Papelería"},
    {id: 23, nombre: "Anotador Eco con lapicéra", precio: 1000, img: "/img/anotadores eco.webp", categoria: "Papelería"},
    {id: 24, nombre: "Cuadros x 2 Mandala", precio: 10000, img: "/img/mandalaendos.jpg", categoria: "Cuadros"},
    {id: 25, nombre: "Cuadro Calado en 3", precio: 12000, img: "/img/caladoentres.jpg", categoria: "Cuadros"},
    {id: 26, stock: 10, nombre: "Velas Aromat. en f/vidrio", precio: 1200, img: "/img/velassojaaroma.jpg", categoria: "Velas y Aromatizantes"}
]
*/

/*
const ItemListContainer = ({ titulo }) => {


    let [lista, setLista] = useState([])
    const { id } = useParams ()

    useEffect(() => {
        if(id){
            let categoria = productos.filter(function(producto) {return producto["categoria"] === id})
            setLista(categoria)
        }else{
            setLista(productos)
        }   
    }, [id])

    return (
        <div>
            <h2>{titulo}</h2>
            <ItemList lista={lista}/>
        </div>
    )
}

export default ItemListContainer;

*/

/*

///////////////////////////

const ItemListContainer = ({ titulo }) => {


    let [lista, setLista] = useState([])
    const { id } = useParams ()

    useEffect(() => {
        if(id){
            let categoria = productos.filter(function(producto) {return producto["categoria"] === id})
            setLista(categoria)
        }else{
            setLista(productos)
        }   
    }, [id])

    return (
        <div>
            <h2>{titulo}</h2>
            <ItemList lista={lista}/>
        </div>
    )
}

export default ItemListContainer;







const ItemListContainer = ({ titulo }) => {


    const [lista, setLista] = useState([])
    const {id} = useParams()

useEffect(() => {

const coleccionProductos = collection(db, "productos")
const pedido = getDocs(coleccionProductos)

    pedido
        .then((resultado) =>{
            const docs = resultado.docs
            const docs_formateado = docs.map(doc=>{
                const producto = {
                    id : doc.id,
                    ...doc.data()
                }
                return producto
            })
            setLista(docs_formateado)

        })
        .catch((error) =>{
            console.log(error)
        })

    })

}

export default ItemListContainer;
*/

const ItemListContainer = ({titulo}) => {

    const [lista, setLista] = useState([])
    const {id} = useParams()

    
    useEffect(() => {
        if(id){
            const coleccionProductos = collection(db,"productos")
            const filtro = where("title","==",id)
            const consulta = query(coleccionProductos,filtro)
            const pedido = getDocs(consulta)
            pedido
                .then((resultado)=>{
                    setLista(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
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
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    },[id])

    return (
        <div>
            <h2>{titulo}</h2>
            <ItemList lista={lista}/>
        </div>
    )

}

export default ItemListContainer;