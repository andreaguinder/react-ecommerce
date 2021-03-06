import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import { Button } from "react-bootstrap";
import TotalTodo from "./TotalTodo";
import {db} from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from 'sweetalert2';

const CarritoContainer = () => {

    const {cartArray, borrarItem, borrarTodo, precioTotal} = useContext(CartContext)
    const crearOrden = () => {

        const coleccionProductos = collection(db,"ordenes")
        const usuario = {
            nombre: "Juan",
            email: "mail@gmail.com",
            telefono: "01168697258"
        }

        const orden = {
            usuario,
            cartArray,
            total: precioTotal(),
            fechaPedido: serverTimestamp()
        }

        const pedido = addDoc(coleccionProductos,orden)

        pedido
        .then((resultado)=>{
            return Swal.fire (
                'N° de Orden ' + (resultado.id),
                `
                El total de tu compra es $${orden.total}.
                ¡Gracias por tu compra, volvé pronto!
                `,
                'success',
                borrarTodo()
            )
        })
        .catch((error)=>{
            return Swal.fire(error)
        })
    }

            if (cartArray.length === 0){
                return(
                <div className='divCentrado' style={{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
                    <p className='linksEstilo'>Aún no has seleccionado ningún producto</p>
                    <Link to="/"><Button className='btn btn-secondary buttonVerMas m-4 p-2' style={{width: "10rem"}}>Ir al inicio</Button></Link>
                </div>
                )
            } else {
                return (
                    <>
                    <div>
                    {cartArray.map(producto => <CartItem key={producto.item.id} producto={producto} borrarItem={borrarItem}/>)}
                    </div>
                    <TotalTodo />
                    <div className='divCentrado'>
                    <Button className='btn btn-secondary buttonVerMas m-1' onClick={borrarTodo}>Vaciar Carrito</Button>
                    <Button className='btn btn-secondary buttonVerMas m-1' aria-label="Show SweetAlert2 success message" onClick={crearOrden}>Terminar compra</Button>
                    </div>
                    </>
                )
            }
}

export default CarritoContainer;
