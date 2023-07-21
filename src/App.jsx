import './App.css';
import Navbar from'./components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {

 

  return (
   <main className='main' >
    <Navbar/>
    <ItemListContainer  saludo={'Hola mundo !'} />
   </main>
  )
}

export default App;
