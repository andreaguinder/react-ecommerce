import React, { createContext, useState } from 'react';

export const CartContext = createContext();
const CartProvider = ({ children }) => {

    const [cartArray, setCartArray] = useState([]);

    const addToCart = (product, count) => {
        if (isInCart(product.id)) {
            console.log('ya está el producto en el carrito.');
        } else {console.log(`Agregaste ${product.nombre}, Cantidad: ${count}, Precio: $${product.precio}C/U,.`);
        const newProduct = {
            item: product,
            count
        }
        setCartArray([...cartArray, newProduct])
        }
    }
    const deleteItem = (id) => {
        const updatedCart = cartArray.filter(element => element.item.id !== id);
        setCartArray(updatedCart);
    }
    
    const clearCart = () => {
        setCartArray([]);
    }
    
    const isInCart = (id) => {
        return cartArray.some(element => element.item.id === id);
    }
    
    const productCounter = () => {
        return cartArray.reduce((accum, item) => accum = accum + item.count, 0)
    }
    

    const value = {
        cartArray,
        addToCart,
        deleteItem,
        clearCart,
        productCounter
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
