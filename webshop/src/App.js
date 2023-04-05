import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './Pages/global/HomePage';
import Cart from './Pages/global/Cart';
import ContactUs from './Pages/global/ContactUs';
import Shops from './Pages/global/Shops';
import SingleProduct from './Pages/global/SingleProduct';
import AdminHome from './Pages/admin//AdminHome';
import AddProduct from './Pages/admin/AddProduct';
import EditProduct from './Pages/admin/EditProduct';
import MaintainProducts from './Pages/admin/MaintainProducts';
import MaintainShops from './Pages/admin/MaintainShops';
import MaintainCategories from './Pages/admin/MaintainCategories';
import { useTranslation } from 'react-i18next';



function App() {
  const { t, i18n } = useTranslation();

  // Siia projekti lisage ka 3s ja 4s keel
  // Favicon
  // Projekti nimi
  // Google font

  // Pange mõnda teise prjekti ka Bootstrap
  // pange mõnda teise projekti ka React - i18next
 
  const updateLanguage = (newLang) => {
    i18n.changeLanguage(newLang)
    localStorage.setItem("language", newLang); //salvestab selle keele, mida soovid, pärast refreshi jääb keel, mille valis - läheb ka i18n faili
  }
  return (
    <div className="App">

       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
          </Nav>
          <img className="lang" src="/english.png" alt=""  onClick={() => updateLanguage ("en")} /> 
      {/* enne oli buttoniga onClick */}
          <img className='lang' src="/estonia.png" alt="" onClick={() => updateLanguage ("ee")} />
          
        </Container>
      </Navbar>

<Routes>
  <Route path ="" element= {<HomePage /> }/>
  <Route path ="cart" element= {<Cart /> }/>
  <Route path ="contact" element= {<ContactUs /> }/>
  <Route path ="shops" element= {<Shops /> }/>
  <Route path ="product" element= {<SingleProduct /> }/>
  <Route path ="admin" element= {<AdminHome /> }/>
  <Route path ="admin/add-product" element= {<AddProduct /> }/>
  <Route path ="admin/edit-product/:id" element= {<EditProduct /> }/>
  <Route path ="admin/maintain-products" element= {<MaintainProducts /> }/>
  <Route path ="admin/maintain-shops" element= {<MaintainShops /> }/>
  <Route path ="admin/maintain-categories" element= {<MaintainCategories /> }/>
  


</Routes>

    </div>
  );
}

export default App;
