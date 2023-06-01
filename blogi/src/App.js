import { Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/avaleht/Avaleht';
import LisaPostitus from './pages/lisapostitus/LisaPostitus';
import YksPostitus from './pages/ykspostitus/YksPostitus';
import TopBar from './components/topbar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import MuudaPostitust from './pages/muudapostitust/MuudaPostitust';
import {ContactUs} from './pages/kontakt/ContactUs';

function App() {



  return (
    <div className='app'>

      <TopBar />
      

      <Routes>
        <Route path="" element={<Avaleht />} />
        <Route path="lisa-postitus" element={<LisaPostitus />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path="yks-postitus/:index" element={<YksPostitus />} />
        <Route path="muuda-postitust/:index" element={<MuudaPostitust />} />

      </Routes>
    </div>
  );
}

export default App;
