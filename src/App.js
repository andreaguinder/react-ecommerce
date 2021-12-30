//
import React from "react";
/*
import 'bootstrap/dist/css/bootstrap.min.css';
*/
import "./components/estilos/estilos.css"

// import './App.scss';
import NavBar from "./components/NavBar";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";

function App (){
    return (
        <>
            <NavBar/>
            <ItemListContainer titulo = "Bienvenidos a Alyssa"/>
            <ItemDetailContainer/>
            <Footer/>
        </>

    )
}

export default App