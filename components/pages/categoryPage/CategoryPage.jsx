import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import data from "../../../src/data/data.js";
import Spinner from "../../spinner/spinner.jsx";
import ListCategoryContainer from "../../listCategoryContainer/ListCategoryContainer.jsx";


const CategoryPage = ()=>{
    const [showLoading, setShowLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const {species} = useParams();

  useEffect(() => {
    const getProducts = () => {
      try {
let filterCategories = products.filter((product)=>{
    return products.category === species
})
        setProducts(filterCategories);
        setTimeout(() => setShowLoading(false), 3000); // 3 segundos de delay
      } catch (error) {
        console.error("Error fetching data:", error);
        setShowLoading(false);
      }
    };

    getProducts();
  }, []);


    return(
        <>
            {showLoading ? (
          <Spinner />
        ) : (
          <div className="contenedor-productos">
            {!products ? (
              <li>'No hay productos para mostrar'</li>
            ) : (
              <ListCategoryContainer products={products} />
            )}
          </div>
        )}
        </>
      
    )
}

export default CategoryPage;