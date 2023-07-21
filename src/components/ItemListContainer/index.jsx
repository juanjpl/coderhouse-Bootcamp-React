import "./styles.css";

function ItemListContainer(props) {
  const texto = props.name;
  const saludos = props.saludo;

  return (
    <div className="item-list-container">
      <p>{texto}</p>
      <p>{saludos} </p>
    </div>
  );
}

export default ItemListContainer;
