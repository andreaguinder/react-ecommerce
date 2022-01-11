import React, { useState } from "react"

const ItemCount = ( {stock, initial,}) => {

    const [ ItemCount, setContador ] = useState(initial);

    const sumarProducto = () => {
        setContador(ItemCount + 1)
    }
    const restarProducto = () => {
            setContador(ItemCount - 1)
    }
    const confirmarProducto = () => {
        console.log(`Confirmar cantidad: ${ItemCount}`)
    }

    return (
    <div className="divCentrado">
        <p>Cantidad Actual: {ItemCount}</p>
        <button type="button" className="btn btn-secondary" onClick={() => restarProducto()} disabled={ItemCount === initial}>-</button>
        <button type="button" className="btn btn-secondary" onClick={() => sumarProducto()} disabled={ItemCount >= stock}>+</button>
        <button type="button" className="btn btn-secondary" onClick={() => confirmarProducto()} disabled={stock === 0}>Confirmar</button>
        <p>
        <button> Agregar al Carrito </button>
        </p>
    </div>
    )
}

export default ItemCount