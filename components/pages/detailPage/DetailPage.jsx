import styles from './styles.css';
import Spinner from '../../spinner/spinner.jsx'
import data from '../../../src/data/data.js'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetailContainer from '../../itemdetailContainer/ItemDetailContainer';

const DetailPage = ({agregarCarrito})=>{
    const [showLoading, setShowLoading] = useState(true);
    const[productDetail, setProductDetail] = useState([])

    const {id}=useParams();


  

    useEffect(() => {
        const getProductDetail = () => {
          try {
            const detail = data.filter((dato)=>dato.id==id);
            console.log(detail)
            setProductDetail(detail);
            setTimeout(() => setShowLoading(false), 3000); // 3 segundos de delay
          } catch (error) {
            console.error("Error fetching data:", error);
            setShowLoading(false);
          }
        };
    
        getProductDetail();
      }, []);
  

    return(
        <>
        {showLoading ? (
      <Spinner />
    ) : (
      <div className="contenedor-productos">
        {!productDetail ? (
          <li>'No se encontró el producto'</li>
        ) : (
          
            <ItemDetailContainer detail={productDetail} agregarCarrito={agregarCarrito} />
         
        )}
      </div>
    )}
 </>
    )
}

export default DetailPage;