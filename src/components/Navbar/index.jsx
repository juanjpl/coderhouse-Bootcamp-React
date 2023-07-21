import "./styles.css";
import CartWidget from "../CartWidget";
function Navbar() {
  return (
    <div className="navbar">
      <div className="brand">
        <h1>Bravo-Clothing</h1>
      </div>
      <div className="botonera">
        <button>HOME</button>
        <button>SHOP</button>
        <button>BLOG</button>
        <button>PAGES</button>
        <button>ABOUT US</button>
        <button>CONTACT</button>
      </div>
      <div className="cartwidget">
        <CartWidget/>
      </div>
    </div>
  );
}

export default Navbar;
