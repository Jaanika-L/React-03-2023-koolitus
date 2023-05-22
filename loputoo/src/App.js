
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ManagePost from './pages/manage/ManagePost';
import ChangePost from './pages/change/ChangePost';

function App() {

  return (
    <div>
      


<TopBar/>


      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='single' element={<Single/>}/>
        <Route path='write' element={<Write/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='post/:index' element ={<Single/>}/>
        <Route path='manage' element = {<ManagePost/>}/>
        <Route path='change/:index' element = {<ChangePost/>}/>
      </Routes>


  
    </div>
  );
}

export default App;
