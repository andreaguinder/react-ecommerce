
import {React, useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


let productos= [
    {id: 1, stock: 5, nombre: "Cuadro Dalí", precio: 5000, img: "/img/pruebaimg.jpg", categoria: "cuadros", detalle: "Cuadro imitación Dalí realizado en Canvas de pared de 60 cm x 80 cm."},
    {id: 2, stock: 4, nombre: "Anotadores s/e", precio: 500, img: "/img/anotadores.jpg", categoria: "papeleria", detalle: "Anotadores sin elección de motivo, diseño zen, de 10 cm x 15 cm x 80 hojas lisas anillado superior"},
    {id: 3, stock: 8, nombre: "Galatea de las Esferas", precio: 5000, img: "/img/tmp1091343711360516099.jpg", categoria: "cuadros", detalle: "Cuadro imitación Dalí realizado en Canvas de pared de 70 cm x 50 cm."},
    {id: 4, stock: 10, nombre: "Velas Strawberry", precio: 200, img: "/img/Velas mockup con trama.png", categoria: "velasYaroma", detalle: "Velas aromáticas x 2 de aroma Strawberry, ideal para aromatizar tu espacio zen."},
    {id: 5, stock: 2, nombre: "Cuadro Naturaleza", precio: 800, img: "/img/fondo 2.jpg", categoria: "cuadros", detalle: "Cuadro inspirado en la Naturaleza pero con una simbología de ambigüedad en sus colores siendo magenta y cyan, de 50 cm x 65 cm."}
]


const ItemDetailContainer = () => {
    const [added, setAdded] = useState(false);
    const { id } = useParams()
    const [producto, setProducto] = useState({})

    const onAdd = () => {
        setAdded(true);
      }
    useEffect(() => {

     if(id){
        const general = productos.find(e => e.id === parseInt(id))
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(general)
            }, 1000)
        })
        promesa
            .then((producto) => {
                setProducto(producto)
            })
    }
    

}, [id])






    return (
        <div className="divCentrado">
            <ItemDetail onAdd={onAdd} producto={producto} added={added}/>
        </div>
    )
}

export default ItemDetailContainer;

