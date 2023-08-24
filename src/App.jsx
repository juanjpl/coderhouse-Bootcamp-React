import Navbar from "./components/navbar/Navbar.jsx";
import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Error from "./components/error/Error.jsx";
import DetailPage from "../components/pages/detailPage/DetailPage.jsx";
import CategoryPage from '../components/pages/categoryPage/CategoryPage.jsx'
import { useEffect , useState } from "react";

const App = () => {

const [carrito, setCarrito] = useState(0)

const agregarCarrito=(cantidad)=>{
  setCarrito(carrito+cantidad)
}

useEffect(()=>{

},[carrito])

  return (
    <Router>
      <div className="app-contenedor">
        <Navbar carrito={carrito} />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/shop" element={<Home />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/detail/:id" element={<DetailPage agregarCarrito={agregarCarrito} />}></Route>
          <Route path="/category/:categories" element={<CategoryPage/>}></Route>
          <Route path="/*" element={<Error/>}></Route>
        </Routes>
      
      </div>
    </Router>
  );
};

export default App;
