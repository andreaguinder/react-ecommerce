import React, { useState } from "react"

const ItemCount = ( {stock, initial, onAdd}) => {

    const [ ItemCount, setContador ] = useState(initial);

    const sumarProducto = () => {
        setContador(ItemCount + 1)
    }
    const restarProducto = () => {
            setContador(ItemCount - 1)
    }

    return (
    <div className="divCentrado">
        <p>Cantidad Actual: {ItemCount}</p>
        <button type="button" className="btn btn-secondary" onClick={() => restarProducto()} disabled={ItemCount === initial}>-</button>
        <button type="button" className="btn btn-secondary" onClick={() => sumarProducto()} disabled={ItemCount >= stock}>+</button>
        <button type="button" className="btn btn-secondary" onClick={() => onAdd(ItemCount)}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount