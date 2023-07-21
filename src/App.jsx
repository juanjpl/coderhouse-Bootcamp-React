import './App.css';
import Navbar from'./components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  function sayHello(){
    alert('Hola mundo!');
  }

  return (
   <main className='main' >
    <Navbar/>
    <ItemListContainer text={{name:'Hola mundo!'}} saludo={sayHello} />
   </main>
  )
}

export default App;
