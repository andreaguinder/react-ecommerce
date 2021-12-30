import React, { useState } from "react"

const ItemCount = ( {stock, initial, onAdd}) => {

    const [ ItemCount, setContador ] = useState(initial);

    const sumarProducto = () => {
        setContador(ItemCount + 1)
    }
    const restarProducto = () => {
            setContador(ItemCount - 1)
    }
    const confirmarProducto = () => {
        console.log(`Confirmar cantidad: ${ItemCount}`)
        //onAdd(contador)
    }

    return (
    <div className="divCentrado">
        <p>Cantidad Actual: {ItemCount}</p>
        <button onClick={() => restarProducto()} disabled={ItemCount === initial}>-</button>
        <button onClick={() => sumarProducto()} disabled={ItemCount >= stock}>+</button>
        <button onClick={() => confirmarProducto()} disabled={stock === 0}>Confirmar</button>
        <p>
        <button> Agregar al Carrito </button>
        </p>
    </div>
    )
}

export default ItemCount