import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
    </div>
   
      <div className="card">
        <ItemListContainer greeting='Bienvenidos al Ecommerce' />
        <h2>Botón contador</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
   
    </>
  )
}

export default App
