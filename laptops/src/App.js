import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Avaleht from './Pages/Avaleht';
import LisaArvuti from './Pages/LisaArvuti';
import VaataArvuteid from './Pages/VaataArvuteid';
import Ostukorv from './Pages/Ostukorv';
import Tooted from './Pages/Tooted';

function App() {
  return (
    <div>
      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/all'>
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to='/add'>
        <button>Lisa sülearvuteid</button>
      </Link>
      <Link to='/cart'>
        <button>Ostukorv</button>
      </Link>
      <Link to='/products'>
        <button>Vaata tooteid</button>
      </Link>
      <Routes>
        <Route path='' exact element={ <Avaleht /> } />
        <Route path='all' exact element={ <VaataArvuteid/> } />
        <Route path='add' exact element={ <LisaArvuti/> } />
        <Route path='cart' exact element={ <Ostukorv/> } />
        <Route path='products' exact element={ <Tooted/> } />
      </Routes>
       
    </div>
  );
}

export default App;
