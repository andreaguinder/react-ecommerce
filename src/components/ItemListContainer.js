import { useEffect } from "react"
import React from "react"
import Contador from "../containers/Contador";

const ItemListContainer = () => {

    useEffect(()=>{
        console.log("Soy un efecto")
        //Aca se hace ajax para llamar info a alguna api rest
        //por el array vacio solo se aplica una vez
        setTimeout(()=>{},2000)
    }, []);

    const onAdd = () => {}

    return (
        <div className="divCentrado">
            <p> Soy un contenedor de items</p>
            <Contador stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer
