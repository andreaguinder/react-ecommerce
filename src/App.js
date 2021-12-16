//
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contador from "./containers/Contador";

function App (){
    return (
        <>
            <NavBar/>
            <Footer/>
            <Contador stock={5} initial={1}/>
        </>

    )
}

export default App