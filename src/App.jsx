import Navbar from "../components/navbar/Navbar.jsx";
import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home.jsx";
import About from "../components/pages/about/About.jsx";
import Contact from "../components/pages/contact/Contact.jsx";
import Error from "../components/pages/error/Error.jsx";
import DetailPage from "../components/pages/detailPage/DetailPage.jsx";
import CategoryPage from '../components/pages/categoryPage/CategoryPage.jsx'

const App = () => {


  return (
    <Router>
      <div className="app-contenedor">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/shop" element={<Home />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/detail/:id" element={<DetailPage/>}></Route>
          <Route path="/category/:categories" element={<CategoryPage/>}></Route>
          <Route path="/*" element={<Error/>}></Route>
        </Routes>
      
      </div>
    </Router>
  );
};

export default App;
