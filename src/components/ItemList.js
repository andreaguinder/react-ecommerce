import React from "react";
import { useEffec, useState } from "react";
import Contador from "../containers/Contador";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

let productos = [
    {stock: 5, id: 1, title: "Cuadro 1", precio: "$5000", img: "URL"},
    {stock: 4, id: 2, title: "Cuadro 2", precio: "$5000", img: "URL"},
    {stock: 8, id: 3, title: "Cuadro 3", precio: "$5000", img: "URL"},
    {stock: 10, id: 4, title: "Cuadro 4", precio: "$5000", img: "URL"},
    {stock: 2, id: 5, title: "Cuadro 5", precio: "$5000", img: "URL"}
]

function Item({ item }) 


function ItemList(){
    const[productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)
    const Item = () => {
    return (
        <div>
            
        </div>
    )
}
}
export default Item
