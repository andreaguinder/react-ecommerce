import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CartWidget (){
    return (
            <li><a href="#"><FontAwesomeIcon icon={faShoppingCart}/></a></li>
    )
}

export default CartWidget