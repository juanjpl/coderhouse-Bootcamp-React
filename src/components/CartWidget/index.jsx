import './styles.css';
import Cart from'../../assets/icons/carrito-compras-react.png';

function CartWidget(){

    return(
        <div className='cart-widget' >
        <img src={Cart} alt="cart" className='cart-icon'/>
        </div>
    )
}

export default CartWidget;