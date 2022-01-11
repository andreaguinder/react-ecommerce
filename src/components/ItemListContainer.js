import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const productos = [
    {id: 1, nombre: "Cuadro Dalí", precio: 5000, img: "/img/pruebaimg.jpg", categoria: "cuadros"},
    {id: 2, nombre: "Anotadores s/e", precio: 500, img: "/img/anotadores.jpg", categoria: "papeleria"},
    {id: 3, nombre: "Cuadro Dalí 2", precio: 5000, img: "/img/tmp1091343711360516099.jpg", categoria: "cuadros"},
    {id: 4, nombre: "Velas Strawberry", precio: 200, img: "/img/Velas mockup con trama.png", categoria: "velasYaroma"},
    {id: 5, nombre: "Cuadro Dalí", precio: 800, img: "/img/fondo 2.jpg", categoria: "cuadros"}
]
const ItemListContainer = ({ titulo }) => {

    let [lista, setLista] = useState([])
    const { nombre } = useParams ()

    

    useEffect(() => {
        if(nombre){
            let categoria = productos.filter(function(producto) {return producto["categoria"] === nombre})
            setLista(categoria)
        }else{
            setLista(productos)
        }   
    }, [nombre])

    return (
        <div>
            <h2>{titulo}</h2>
            <ItemList lista={lista}/>
        </div>
    )
}

export default ItemListContainer