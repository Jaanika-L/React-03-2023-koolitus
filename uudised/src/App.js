

import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './Pages/Avaleht';
import Kontakt from './Pages/Kontakt';
import Meist from './Pages/Meist';
import Uudised from './Pages/Uudised';
import LisaUudis from './Pages/LisaUudis';
import HaldaUudised from './Pages/HaldaUudised';
import YksUudis from './Pages/YksUudis';

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
      <Link to='/lisa-uudis'>
        <button>Lisa uudis</button>
      </Link>
      <Link to='/halda'>
        <button>Halda uudiseid</button>
      </Link>
      


      <Routes>
        <Route path='' element={ <Avaleht/>} />
        <Route path='uudised' element= {<Uudised />}  />
        <Route path='kontakt' element= {<Kontakt/>}  />      
        <Route path='meist' element= {<Meist />}  />
        <Route path='lisa-uudis' element= {<LisaUudis />}  />
        <Route path='halda' element= {<HaldaUudised />}  />
        <Route path='uudis/:index' element= {<YksUudis />}  />
      </Routes>

    </div>
  );
}

export default App;
