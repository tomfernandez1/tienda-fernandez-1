import './App.css';
import Navbar from "./components/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemCount from './components/ItemCount';

function App() {
  return (
      <>
        <Navbar />
        <ItemListContainer/>
      </>
  );
}

export default App;
