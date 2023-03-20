import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './Pages/Avaleht';
import Ostukorv from './Pages/Ostukorv';
import LisaToode from './Pages/LisaToode';
import Seaded from './Pages/Seaded';
import Meist from './Pages/Meist';


function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg/220px-Ours_brun_parcanimalierpyrenees_1.jpg" alt="Karu" />
      </Link>

      <Link to="/ostukorv">
    <button className="nupp">Ostukorv</button>
      </Link>
      <Link to="/lisa-toode">
    <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/seaded">
    <button className="nupp">Seaded</button>
      </Link>

      
      <Link to="/meist">
    <button className="nupp">Meist</button>
      </Link>


    {/* <p></p>
    <div>Tekst</div> */}
    {/* <span>cd</span> */}

    <Routes>
      <Route path= "" element={ <Avaleht /> } />
      <Route path='ostukorv' element={ <Ostukorv /> } />
      <Route path='lisa-toode' element={ <LisaToode /> } />
      <Route path='seaded' element={ <Seaded /> } />
      <Route path='meist' element={ <Meist /> } />
    </Routes>
    </div>
  );
}

export default App;
