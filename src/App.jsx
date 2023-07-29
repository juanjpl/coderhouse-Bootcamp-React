import { useState, useEffect } from 'react';
import ItemCounter from '../components/ItemCounter';
import './App.css'

function App() {

  const [n_productos , setn_productos] = useState(2);
  const [stock, setStock] = useState(10);

function onAdd(productos){

  setn_productos(n_productos + productos);
  setStock(stock - productos);
}

useEffect(()=>{
  console.log(`Cantidad  de stock ${stock} `);
console.log('Actualizando cantidad productos en carrito !');
},[n_productos]);

  return(
<>
<div>
  <p>carrito: {n_productos} </p>
</div>
<ItemCounter stock={stock} onAdd={onAdd}  />
</>
  )

}

export default App
