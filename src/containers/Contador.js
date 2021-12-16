import React, { useState } from "react"

const Contador = ( {stock, initial, onAdd}) => {

    const [ Contador, setContador ] = useState();

    const sumar = () => {
        if (Contador < stock){
        setContador(Contador + 1)
        }
    }
    const restar = () => {
        if (Contador > initial) {
            setContador(Contador - 1)
        }
    }

    return (
    <div>
        <button onClick={() => restar()} disabled={Contador == initial}>-</button>
        <p>{Contador}</p>
        <button onClick={() => sumar()} disabled={Contador > stock}>+</button>
    </div>
    )
}

export default Contador