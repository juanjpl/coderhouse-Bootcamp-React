import {useState , useEffect} from 'react';
import './styles.css';


function ItemLisContainer(){

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`La cuenta es: ${count}`)
    }, [count]);

    function increment(){
        setCount(count + 1);
    }

    return(
        <div className='item-list-container'> 
            <p>Hola! Buenos Dias!</p>
            <h1>contador: {count}</h1>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default ItemLisContainer;