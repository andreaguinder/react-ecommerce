import React, { createContext, useState } from 'react'

export const contextCarrito = createContext()

const CartProvider = ({ children }) => {

    const [cartArray, setcartArray] = useState([])

    const addtoCart = (detalleProductos, contador) => {
        if(isInCart(detalleProductos.id)) {
            console.log("ya está el producto en el carrito");
        } else {
            console.log(`Agregaste ${detalleProductos.desc}, cantidad: ${contador}.`);
            const newObj = {
                item: detalleProductos,
                contador
            }
            setcartArray([...cartArray, newObj])
        }
    }

    const borrarItem = (id) => {
        const actualizarCart = cartArray.filter(el => el.item.id !== id)
        setcartArray(actualizarCart)
    }

    const borrarTodo = () => {
        setcartArray([])
    }

    const isInCart = (id) => {
        return cartArray.some(el => el.item.id === id)
    }

    const contadorProductos = () => {
        return cartArray.reduce((accum, item) => accum = accum + item.contador, 0)
      }

    const value = {
        cartArray,
        addtoCart,
        borrarItem,
        borrarTodo,
        contadorProductos
    }


    return (
        <contextCarrito.Provider value={value}>
            {children}
        </contextCarrito.Provider>
    )
}

export default CartProvider;

