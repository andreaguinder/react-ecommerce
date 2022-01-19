import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();


const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const addtoCart = (product, count) => {
        if (isInCart(product.id)) {
            const indexActualizar = cartArray.findIndex(el => el.item.id === product.id)
            cartArray[indexActualizar].count = cartArray[indexActualizar].count + count
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


    useEffect(() => {
        if(cartArray.length > 0){
            let cantidad = 0
            cartArray.forEach(item => cantidad = cantidad + item.count)
            setCantidadTotal(cantidad)
        }else{
            setCantidadTotal(0)
        }


    },[cartArray])


    const contadorProductos = () => {
        return cartArray.reduce((accum, item) => accum = accum + item.count, 0)
    }

    const precioTotal = () => {
        return cartArray.reduce((accum, el) => accum = accum + (el.item.precio*el.count), 0)
    }

    const value = {
        cartArray,
        cantidadTotal,
        addtoCart,
        borrarItem,
        borrarTodo,
        contadorProductos,
        precioTotal
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

