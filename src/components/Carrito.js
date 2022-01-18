import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { CartContext } from './CartContext'
import { Button } from 'react-bootstrap';

const CarritoContainer = () => {

    const { cartArray, borrarItem } = useContext(CartContext)

    return (        
        <div>
            {cartArray.length ===  0 && 
                <div className='d-flex flex-column justify-content-center'>
                    <h2 className='mb-5'>No hay nada en el carrito</h2>
                    <Link to="/"><Button className=' btn-secondary buttonVerMas'>Ir al inicio</Button></Link>
                </div>
            }
            {(cartArray.length > 0) && cartArray.map(prod => <CartItem key={prod.item.id} productos={prod} borrarItem={borrarItem} /> )}
        </div>
    )
}

export default CarritoContainer;

