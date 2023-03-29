
import { Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Tagasiside from './Pages/Tagasiside';
import TagasisideAndjad from './Pages/TagasisideAndjad';




function App() {
  return (
    <div className="App">
    

<Link to = '/'>
<button>Avaleht</button>
</Link>

<Link to = '/tagasiside'> 
<button>Tagasiside</button>
</Link>

<Link to = '/tagasiside-andjad'> 
<button>Tagasiside andjad</button>
</Link>







    <Routes>
      <Route path='/' element={<div>Tere</div>}/>
      <Route path='/tagasiside' element={<Tagasiside/>} />
      <Route path='/tagasiside-andjad' element={<TagasisideAndjad/>} />
    </Routes>
    </div>
  );
}

export default App;
