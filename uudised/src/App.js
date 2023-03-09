

import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './Pages/Avaleht';
import Kontakt from './Pages/Kontakt';
import Meist from './Pages/Meist';
import Uudised from './Pages/Uudised';

function App() {
  return (
    <div>
      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/uudised'>
        <button>Uudiste lehele</button>
      </Link>
      <Link to='/kontakt'>
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to='/meist'>
        <button>Info meist</button>
      </Link>

      <Routes>
        <Route path='' element={ <Avaleht/>} />
        <Route path='uudised' element= {<Uudised />}  />
        <Route path='kontakt' element= {<Kontakt/>}  />      
        <Route path='meist' element= {<Meist />}  />
      </Routes>

    </div>
  );
}

export default App;
