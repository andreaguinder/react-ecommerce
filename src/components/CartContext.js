import React, { createContext, useState } from 'react';

export const CartContext = createContext();


const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([])

    const addtoCart = (product, count) => {
        if (isInCart(product.id)) {
            console.log('El producto ya se encuentra en el carrito.');
        } else {
            console.log(`Agregaste ${product.nombre}, cantidad: ${count}.`);
            const newObj = {
              item: product,
              count
            }
            setCartArray([...cartArray, newObj])
        }
    }
    

    const borrarItem = (id) => {
        const actualizarCart = cartArray.filter(el => el.item.id !== id)
        setCartArray(actualizarCart);
    }

    const borrarTodo = () => {
        setCartArray([]);
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

