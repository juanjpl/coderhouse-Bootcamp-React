import './styles.css';
import { useState , useEffect } from 'react';

function ItemCounter({stock, onAdd}){

    const [count, setCount] = useState(1);

    useEffect(()=>{
      console.log(`Productos a agregar ${count} `)
      },[count])

    return (
      <>
        <div className="card">
            <p>El stock del producto es: {stock} </p>
          <p>{count} </p>
          <button disabled={count >= stock} onClick={() => setCount((count) => count + 1)}>
           Increment
          </button>
          <button disabled={count <= 1} onClick={() => setCount((count) => count - 1)}>
           Decrement
          </button>
          <button  disabled={stock<=0} onClick={() =>{ onAdd(count);setCount(1)}}>
           Agregar al carrito
          </button>
        </div>
      </>
    )
}

export default ItemCounter;