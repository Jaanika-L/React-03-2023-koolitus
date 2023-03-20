import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Avaleht from './Pages/Avaleht';
import LisaArvuti from './Pages/LisaArvuti';
import VaataArvuteid from './Pages/VaataArvuteid';

function App() {
  return (
    <div>
      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='all'>
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to='add'>
        <button>Lisa sülearvuteid</button>
      </Link>
      <Routes>
        <Route path='' exact element={ <Avaleht /> } />
        <Route path='all' exact element={ <VaataArvuteid/> } />
        <Route path='add' exact element={ <LisaArvuti/> } />
      </Routes>
       
    </div>
  );
}

export default App;