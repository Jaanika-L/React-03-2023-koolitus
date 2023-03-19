
import { Link, Route, Routes } from 'react-router-dom';
import Courses from './Pages/Courses';
import Hobbies from './Pages/Hobbies';
import Work from './Pages/Work';
import './App.css';

function App() {
  return (
    <div>
      <img className='main-picture' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/330px-Erinaceus_europaeus_LC0119.jpg" alt="Siil" />
      <p className='main-text'> Tere! Mina olen Jaanika ja see on minu portfoolio.</p>
      <div className='rectangle'></div>
      
      <div className='navigation-pictures'>
        <Link className='main-link' to='work'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png" alt="XD logo" />
        <p>Tööde lehele</p>
        </Link>
        <Link className='main-link' to="hobbies">
        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-people-hobbies_23-2149053953.jpg" alt="Hobbies" />
        <p>Hobbide lehele</p>
        </Link>
        <Link className='main-link' to="courses">
        <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/Thumb-Photoshop-2.jpg" alt="Photoshop logo" />
        <p>Kursuste lehele</p>
        </Link>
      </div>
        <iframe className='video' width="200" height="200" src="https://www.youtube.com/embed/fZIRuMZA4_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Routes>
        <Route path='work' element= {<Work />}/>
        <Route path='hobbies' element= {<Hobbies />}/>
        <Route path='courses' element= {<Courses/>}/>
      </Routes>

      <a className='facebook-button' href="https://www.facebook.com/">
      <img src="/facebook.png" alt="" />
      <span>Facebook</span>

      </a>
    </div>
  );
}

export default App;
