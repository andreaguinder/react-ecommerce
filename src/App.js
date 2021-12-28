//
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contador from "./containers/Contador";
import ItemListContainer from "./components/ItemListContainer";

function App (){
    return (
        <>
            <NavBar/>
            <ItemListContainer/>
            <Footer/>
        </>

    )
}

export default App