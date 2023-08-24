import styles from "./styles.css";
import Spinner from "../../spinner/spinner.jsx";
import data from "../../../data/data.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCategoryContainer from '../../itemCategoryContainer/ItemCategoryContainer.jsx';

const CategoryPage = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [productDetail, setProductDetail] = useState([]);

  const { categories } = useParams();
  //console.log(categories);

  useEffect(() => {
    const getProductDetail = () => {
      try {
        const detail = data.filter((dato) => dato.category == categories);
        //console.log(detail);
        setProductDetail(detail);
        setTimeout(() => setShowLoading(false), 3000); // 3 segundos de delay
      } catch (error) {
        console.error("Error fetching data:", error);
        setShowLoading(false);
      }
    };

    getProductDetail();
  }, [categories]);

  return (
    <>
      {showLoading ? (
        <Spinner />
      ) : (
        <div className="contenedor-productos">
          {!productDetail ? (
            <li>'No se encontró el producto'</li>
          ) : (
            <ItemCategoryContainer detail={productDetail} />
          )}
        </div>
      )}
    </>
  );
};

export default CategoryPage;
