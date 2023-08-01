import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [loading , setLoading] = useState(false);
  const [pokemons , setPokemons] = useState([]);

  const productos =[
    {id:'1', name:'Zapatos Adidas', cantidad:5},
    {id:'2', name:'Zapatos Nike', cantidad:3},
    {id:'3', name:'Zapatos Sketch', cantidad:10}
  ]

  //https://pokeapi.co/api/v2/pokemon/ditto

  //La forma antigua
  /*
  const resultado = new Promise((resolve,reject)=>{
    console.log('Cargando productos...')
    reject('Error en la promesa')
    setTimeout(()=>resolve(productos),3000)
  });

  resultado
  .then((response)=>console.log(response))
  .catch((error)=>console.log(error))
console.log(typeof resultado)


//usando sugar syntax
//Promise utilizando el async/await

async function mostrarProductos(){
  return await setTimeout(()=>console.log(productos),3000);
}

console.log(mostrarProductos())
*/

const obtenerData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const data = await response.json()
 
 console.log(data)
}

setTimeout(() => {
  obtenerData()
}, 5000);




async function mostrarPokemon(){
  
  setLoading(true);
  const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

  return result;

}

useEffect(()=>{

  mostrarPokemon()
  .then((response)=>response.json())
  .then((data)=>setPokemons(data.results))
  .catch((error)=>console.log(error))
  .finally(()=>setLoading(false))
},[])


const resultado= productos.map((element,index)=>{
  if(element.id==='2'){
    return{...element,cantidad:0}
  }else{
    return element
  }
})

  return (
    <>     
      <div className="card">
        {loading?'cargando...':pokemons.map(((pokemon,index )=><li key={index} >{pokemon.name} </li>))}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
