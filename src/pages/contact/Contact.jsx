import { useNavigate } from "react-router-dom";


const Contact = ()=>{
    const navigate = useNavigate();

    const goBackHome =()=>{
        navigate('/')
    }
    return(
        <div>
 <h2>CONTACT</h2>
 <button onClick={()=>goBackHome()}>Back Home</button>
        </div>
       

    )
}

export default Contact;