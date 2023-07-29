import { useState } from 'react'
import ItemLisContainer from './components/Footer/ItemListContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
 
      <div className="card">
      <ItemLisContainer/>
     
      </div>
   
    </>
  )
}

export default App
