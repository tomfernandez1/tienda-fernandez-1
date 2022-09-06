import './App.css';
import Navbar from "./components/NavBar/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemCount from './components/ItemCount/ItemCount';
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


function App() {
  const onAdd= (count) => {
    alert(`Agregaste ${count} productos al carrito`)
  }
  return (
      <>
      {/*
        <Navbar />
        <ItemListContainer/>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        */
      }
      <Navbar />
      <ItemDetailContainer/>
      </>
  );
}

export default App;
