import { useEffect, useState } from "react";
import data from "./data/data.js";
import Spinner from "../components/spinner/spinner.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import ItemListContainer from "../components/itemListContainer/ItemListContainer.jsx";
import "./app.css";

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [products, setProducts] = useState([]);

  /*
  console.log(fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then((response)=> response.json))
  .then((data)=> data)
  .catch((error)=>console.log(error))
  */

  useEffect(() => {
    const getProducts = () => {
      try {
         setProducts(data);
         setTimeout(() => setShowLoading(false), 3000); // 3 segundos de delay
        ;
      } catch (error) {
        console.error("Error fetching data:", error);
        setShowLoading(false);
      }
    };
   
    getProducts();
  }, []);

  return (
    <div className="app-contenedor">
      <Navbar/>
      {showLoading ? (
        <Spinner />
      ) : (
        <div className="contenedor-productos">
      
            {!products 
            ? (
              <li>'No hay productos para mostrar'</li>
            ) 
            : (
              <ItemListContainer products={products}/>
             
            )}
      
         
        </div>
        
      )}
    </div>
  );
};

export default App;
