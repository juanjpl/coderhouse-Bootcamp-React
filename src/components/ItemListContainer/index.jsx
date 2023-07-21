import "./styles.css";
import { useState } from "react";

function ItemListContainer({saludo}) {
    const [saludos, setSaludos] = useState(saludo);
 

  function changeGreeting(){
    setSaludos ('Bye World!');
  }

  return (
    <div className="item-list-container">
      <p>{saludos}</p>
  
      <button className="boton-click" onClick={changeGreeting}>Press Me</button>

    </div>
  );
}

export default ItemListContainer;
