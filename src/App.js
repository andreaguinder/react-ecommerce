import { BrowserRouter, Routes, Route } from "react-router-dom";
import background from "./fondo-back.jpg";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./components/estilos/estilos.css"
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import Carrito from "./components/Carrito";
import CartProvider from './components/CartContext';
import Usuario from './components/Usuario';


function App ({greeting}) {

    const myStyle={ 
        backgroundImage: `url(${background})`, 
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y',
        overflowX: 'hidden'
    };

    return (
        <>  
        <CartProvider>
            <BrowserRouter>
                <div style={myStyle}>
                <NavBar/>
                    <h2 className='text-center mt-5'>{greeting="Todo para tu espacio Zen"}</h2>
                
                <Routes>
                <Route path="/" element={<Main/>} />
                <Route path='/categoria/:id' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/Usuario' element={<Usuario/>} />
                <Route path='/Carrito' element={<Carrito/>} />
                
                </Routes>
                <Footer/>
                </div>

            </BrowserRouter>
        </CartProvider>
        </>

    );

}

export default App