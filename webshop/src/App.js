import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/global/HomePage';
import Cart from './Pages/global/Cart';
import {ContactUs} from './Pages/global/ContactUs';
import Shops from './Pages/global/Shops';
import SingleProduct from './Pages/global/SingleProduct';
import AdminHome from './Pages/admin//AdminHome';
import AddProduct from './Pages/admin/AddProduct';
import EditProduct from './Pages/admin/EditProduct';
import MaintainProducts from './Pages/admin/MaintainProducts';
import MaintainShops from './Pages/admin/MaintainShops';
import MaintainCategories from './Pages/admin/MaintainCategories';
import NavigationBar from './components/NavigationBar';
import Login from './Pages/auth/Login';
import Signup from './Pages/auth/Signup';
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';
import NotFound from './Pages/global/NotFound';




function App() {
  const { loggedIn} = useContext(AuthContext); // sellepärast, et ei saaks kirjutades liikuda urlidel.

// SIIN OLI ENNE KÕIK, MIS ON NÜÜD NAVIGATIONBAR.JSXis
  
  return (
    <div className="App">
      <NavigationBar/>
       
<Routes>
  <Route path ="" element= {<HomePage /> }/>
  <Route path ="cart" element= {<Cart /> }/>
  <Route path ="contact" element= {<ContactUs /> }/>
  <Route path ="shops" element= {<Shops /> }/>
  <Route path ="product/:id" element= {<SingleProduct /> }/>
  {loggedIn === true ?//? kui on tõsi näita seda
  <>
  <Route path ="admin" element= {<AdminHome /> }/>
  <Route path ="admin/add-product" element= {<AddProduct /> }/>
  <Route path ="admin/edit-product/:id" element= {<EditProduct /> }/>
  <Route path ="admin/maintain-products" element= {<MaintainProducts /> }/>
  <Route path ="admin/maintain-shops" element= {<MaintainShops /> }/>
  <Route path ="admin/maintain-categories" element= {<MaintainCategories /> }/>
  </> :  // : kui ei ole tõsi,näita seda   
  <>
   
  <Route path ="login" element= {<Login /> }/>
  <Route path ="signup" element= {<Signup /> }/>
  <Route path ="admin/*" element= {<Navigate to="/login"/> }/>
  </>
}
  <Route path ="*" element= {<NotFound/> }/>
</Routes>

<div className='footer' >FOOTER</div>
    </div>
  );
}

export default App;
