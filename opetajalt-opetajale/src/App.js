
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Avaleht from './Pages/Global/Avaleht';
import Kontakt from './Pages/Global/Kontakt';
import Ostukorv from './Pages/Global/Ostukorv';
import Formaat from './Pages/Global/Formaat';
import Klassid from './Pages/Global/Klassid';
import Hind from './Pages/Global/Hind';
import Teemad from './Pages/Global/Teemad';

function App() {
  return (
    <div className='App'>
      <NavigationBar/>

      <Routes>
        <Route path='' element={<Avaleht/>}/>
        <Route path='kontakt' element={<Kontakt/>}/>
        <Route path='ostukorv' element={<Ostukorv/>}/>
        <Route path='formaat' element={<Formaat/>}/>
        <Route path='klassid' element={<Klassid/>}/>
        <Route path='hind' element={<Hind/>}/>
        <Route path='teemad' element={<Teemad/>}/>
        
        

      </Routes>
      
    </div>
  );
}

export default App;
