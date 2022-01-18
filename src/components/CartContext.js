import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartArray, setcartArray] = useState([])

    const addtoCart = (product, count) => {
        if(isInCart(product.id)) {
            console.log("ya está el producto en el carrito");
        } else {
            console.log(`Agregaste ${product.nombre}, Cantidad: ${count}, Precio: $${product.precio}C/U. `);
            const newObj = {
                item: product,
                count
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
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

