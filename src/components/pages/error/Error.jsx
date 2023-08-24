import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Error = ()=>{

    const navigate = useNavigate();

   useEffect(() => {
    setTimeout(() => {
        navigate('/')
    }, 3000);
   }, [navigate])
   

  


    return(
        <div>
 <h2>Error</h2>
 <p>Serás redirigido en 4 segundos...</p>
        </div>
       
    )
}

export default Error;