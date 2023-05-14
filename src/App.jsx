
import Nosotros from './components/Nosotros/Nosotros';
import {ItemListContainer} from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer'
import second, { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacto from './components/contacto/contacto';


function App() {
  return (
  <div>
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="item/:id" element={<ItemDetailContainer/>}/>
    <Route path="/productos" element={<ItemListContainer/>}/>
    <Route path="/productos/:category" element={<ItemListContainer/>}/>
    <Route path="/nosotros/nosotros" element={<Nosotros/>}/>
    <Route path="/contacto/contacto" element={<Contacto/>}/>
   
  </Routes>
 
  </BrowserRouter>
  
  </div>
  );
}



export default App;
