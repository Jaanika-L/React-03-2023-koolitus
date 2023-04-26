import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NavigationBar() {
    const { t, i18n } = useTranslation();

    const updateLanguage = (newLang) => {
        i18n.changeLanguage(newLang)
        localStorage.setItem("language", newLang); //salvestab selle keele, mida soovid, pärast refreshi jääb keel, mille valis - läheb ka i18n faili
      }


  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("nav.admin")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
          </Nav>
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