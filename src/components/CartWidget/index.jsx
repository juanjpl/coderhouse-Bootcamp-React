import './styles.css'
import carrito from '../../assets/carrito-compras-react.png';


function CartWidget(){
    return(
        <div className='boton-carrito'>
            <img className='icono-carrito' src={carrito} alt="" />
            <p className='carrito-numero'>5</p>
        </div>
    )
}

export default CartWidget;