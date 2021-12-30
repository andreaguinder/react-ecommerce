import ItemList from "./ItemList"
import { useState, useEffect } from "react"

const productosTienda = [
    {id: 1, stock: 5, nombre: "Cuadro 1", precio: 5000, img: "/img/pruebaimg.jpg"},
    {id: 2, stock: 4, nombre: "Cuadro 2", precio: 500, img: "/img/anotadores.jpg"},
    {id: 3, stock: 8, nombre: "Cuadro 3", precio: 5000, img: "/img/tmp1091343711360516099.jpg"},
    {id: 4, stock: 10, nombre: "Cuadro 4", precio: 200, img: "/img/Velas mockup con trama.png"},
    {id: 5, stock: 2, nombre: "Cuadro 5", precio: 800, img: "/img/fondo 2.jpg"}
]
const ItemListContainer = ({ titulo }) => {

    let [lista, setLista] = useState([])

    
    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosTienda)
            }, 2000)
        })

        promesa
            .then((lista) => {
                console.log("Funciona")
                setLista(lista)
            })
            .catch(() => {
                console.log("No funciona")
            })

    }, [])

    return (
        <div>
            <h2>{titulo}</h2>
            <ItemList lista={lista}/>
        </div>
    )
}

export default ItemListContainer