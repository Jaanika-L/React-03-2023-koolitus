
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Avaleht from './Pages/Avaleht';
import LisaJook from './Pages/LisaJook';
import HaldaJooke from './Pages/HaldaJooke';
import Jook from './Pages/Jook';

function App() {
  return (
    <div className="App">
     

     <Link to = '/' >
      <button>Avaleht</button>
     </Link>

     <Link to = '/lisa' >
      <button>Lisa</button>
     </Link>

     <Link to = '/halda' >
      <button>Halda</button>
     </Link>


<Routes>
  <Route path = '/' element={<Avaleht/>}/>
  <Route path = '/lisa' element = {<LisaJook/>}/>
  <Route path = '/halda' element = {<HaldaJooke/>}/>
  <Route path = 'jook/:number' element = {<Jook/>}/>
</Routes>

    </div>
  );
}

export default App;
