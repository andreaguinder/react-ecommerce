import React, { useContext } from 'react'

import { CartContext } from './CartContext'
import { Link } from "react-router-dom"
import CartItem from "./CartItem"


const CarritoContainer = () => {

    const { cartArray, borrarItem, borrarTodo } = useContext(CartContext)

    if(cartArray.length === 0) {
        return(
            <div>
                <h2>No se han agregado productos aún</h2>
                <Link to={"/"} className='btn-secondary btn buttonVerMas'>Ir al inicio</Link>
            </div>
        )
    }
    else {
        return (
            cartArray.map((producto) => <CartItem key={producto.item.id} producto={producto} borrarItem={borrarItem} borrarTodo={borrarTodo} />)
        )
    }
}

export default CarritoContainer;
