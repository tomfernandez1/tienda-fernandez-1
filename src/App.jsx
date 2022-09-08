import './App.css';
import Navbar from "./components/NavBar/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemCount from './components/ItemCount/ItemCount';
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Home from './Home';
import ComoComprar from './ComoComprar';
import SobreNosotros from './SobreNosotros';
import VentasPorMayor from './VentasPorMayor';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const onAdd= (count) => {
    alert(`Agregaste ${count} productos al carrito`)
  }
  return (
          <>
            <BrowserRouter>
            <Navbar />
            <ItemListContainer/>

              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/comocomprar' element={<ComoComprar/>}></Route> 
                <Route path='/pormayor' element={<VentasPorMayor/>}></Route>
                <Route path='/nosotros' element={<SobreNosotros/>}></Route>
                <Route path='*' element={<h1>Error 404</h1>}></Route>

              </Routes>
            </BrowserRouter>
          </>
          
          
          /*
      <Navbar />
      <ItemListContainer/>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
      */
        
  );
}

export default App;
