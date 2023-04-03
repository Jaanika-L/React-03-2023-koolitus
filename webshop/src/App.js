import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
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



function App() {
  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

<Routes>
  <Route path ="" element= {<HomePage /> }/>
  <Route path ="cart" element= {<Cart /> }/>
  <Route path ="contact-us" element= {<ContactUs /> }/>
  <Route path ="shops" element= {<Shops /> }/>
  <Route path ="product" element= {<SingleProduct /> }/>
  <Route path ="admin" element= {<AdminHome /> }/>
  <Route path ="admin/add-product" element= {<AddProduct /> }/>
  <Route path ="admin/edit-product" element= {<EditProduct /> }/>
  <Route path ="admin/maintain-products" element= {<MaintainProducts /> }/>
  <Route path ="admin/maintain-shops" element= {<MaintainShops /> }/>
  


</Routes>

    </div>
  );
}

export default App;
