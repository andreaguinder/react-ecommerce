import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//
import React from "react";
/*
import 'bootstrap/dist/css/bootstrap.min.css';
*/
import "./components/estilos/estilos.css"

// import './App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";

function App (){
    return (
        <>
            <Header/>
            <h2 className='text-center mt-5'>Bienvenidos a Alyssa</h2>
            <Main/>
            <ItemDetailContainer/>
            <Footer/>
        </>

    )
}

export default App