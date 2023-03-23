
import './App.css';
import {useRef, useState} from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Kontakt from './Pages/Kontakt';
import Avaleht from './Pages/Avaleht';
import Meist from './Pages/Meist';
import Seaded from './Pages/Seaded';
import Books from './Pages/Books';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef("");
  
 
  const logiSisse = () => {
  
    if (paroolRef.current.value === "123") {
      muudaSisselogitud("jah");
      muudaSonum( kasutajaNimiRef.current.value + " ,Oled sisselogitud");
    }
    else {
      muudaSonum("Vale parool");
    }
  }
const logiValja = () => {
  muudaSisselogitud("ei");
  muudaSonum("");
}
  return (
<div>
 <div className="App">
  <div>{sonum}</div>
   { sisselogitud === "ei" && <div><label>Kasutajanimi</label><br />
      <input ref = {kasutajaNimiRef} type="text"/><br />
      <label>Parool</label><br />
      <input ref = {paroolRef} type="password"/>
    </div> }
      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      { sisselogitud === "jah" && <button onClick={logiValja}>Logi välja</button>}
        <div>---SIIN ON VARASEM KODUTÖÖ--</div>
    <button className="nupp">Press</button> 
    <p className="tekst1">Hello World!</p>     
    <p className="tekst2">Tere Maailm! </p>
    <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascripti logo"/>
    </div>
    <div>--SIIN ON VARASEM KODUTÖÖ--</div>
    <br /><br /><br />
    <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='kontakt'>
        <button>Kontakt</button>
      </Link>
      <Link to='meist'>
        <button>Meist</button>
      </Link>
      <Link to='seaded'>
        <button>Seaded</button>
      </Link>
      <Link to='books'>
        <button>Books</button>
      </Link>

<Routes>
  <Route path='' element = {<Avaleht/>}/>
  <Route path='kontakt' element = {<Kontakt/>}/>
  <Route path='meist' element = {<Meist/>}/>
  <Route path='seaded' element = {<Seaded/>}/>
  <Route path='books' element = {<Books/>}/>
</Routes>

</div>

  );
}

export default App;
