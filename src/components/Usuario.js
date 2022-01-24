import React from "react";
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';

const crearUsuario = () => {

    const ingresarUsuario;

    ingresarUsuario
    Swal
    .fire({
        title: "Tu nombre",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        inputValidator: nombre => {
            // Si el valor es válido, debes regresar undefined. Si no, una cadena
            if (!nombre) {
                return "Por favor escribe tu nombre";
            } else {
                return undefined;
            }
        }
    })
    .then(resultado => {
        if (resultado.value) {
            let nombre = resultado.value;
            console.log("Hola, " + nombre);
        }
    });
    
    return (
        <>
        <div>
        <Button className='btn btn-secondary buttonVerMas m-1' aria-label="Show SweetAlert2 success message" onClick={ingresarUsuario}>Ingresar a tu cuenta</Button>
        </div>
        </>
    )


}


export default crearUsuario;



