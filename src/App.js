//
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contador from "./containers/Contador";
import ItemListContainer from "./components/ItemListContainer";

function App (){
    return (
        <>
            <NavBar/>
            <ItemListContainer/>
            <Contador stock={5} initial={1}/>
            <Footer/>
        </>

    )
}

export default App