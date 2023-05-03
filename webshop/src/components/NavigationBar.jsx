import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';

function NavigationBar() {
    const { t, i18n } = useTranslation();
    const { cartSum } = useContext(CartSumContext);
    const { loggedIn, setLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const updateLanguage = (newLang) => {
        i18n.changeLanguage(newLang)
        localStorage.setItem("language", newLang); //salvestab selle keele, mida soovid, pärast refreshi jääb keel, mille valis - läheb ka i18n faili
      }

      // const login = () => {
      //   setLoggedIn(true);
      // }

      const logout = () => {
        setLoggedIn(false);
        navigate("/"); 
        sessionStorage.removeItem("token");
      }

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            {loggedIn === true && <Nav.Link as={Link} to="/admin">{t("nav.admin")}</Nav.Link>}
            <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
            {loggedIn === false && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
            {loggedIn === false && <Nav.Link as={Link} to="/signup">Signup</Nav.Link>}
            {/* <button onClick={login}> Login</button> */}
           { loggedIn === true && <button onClick={logout}>Logout</button>}
          </Nav>
          <div>{cartSum} € </div>
          <img className="lang" src="/english.png" alt=""  onClick={() => updateLanguage ("en")} /> 
      {/* enne oli buttoniga onClick */}
          <img className='lang' src="/estonia.png" alt="" onClick={() => updateLanguage ("ee")} />
          <img className='lang' src="/russia.png" alt="" onClick={() => updateLanguage ("ru")} />
          <img className='lang' src="/france.png" alt="" onClick={() => updateLanguage ("fr")} />
          
        </Container>
      </Navbar>
  )
}

export default NavigationBar