import { BrowserRouter, Routes, Route } from "react-router-dom";
import background from "./fondo-back.jpg";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";

import "./components/estilos/estilos.css"

// import './App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App (){

    const myStyle={ 
        backgroundImage: `url(${background})`, 
        height:'auto',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y',
        overflowX: 'hidden'
    }; 

    return (
        <>  
            <BrowserRouter>
                    <div style={myStyle}>
                <Header/>
                    <h2 className='text-center mt-5'>Bienvenidos a Alyssa</h2>
                
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/item" element={<ItemDetailContainer/>} />
                </Routes>
                <Footer/>
                    </div>

            </BrowserRouter>
        </>

    );
}

export default App