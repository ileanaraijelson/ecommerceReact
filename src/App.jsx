
import './styles.css';
import {ItemListContainer} from './components/ItemListContainer';
import second, { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
  <NavBar />
  <ItemListContainer texto='3'/>
  </>
  );
}

export default App;
