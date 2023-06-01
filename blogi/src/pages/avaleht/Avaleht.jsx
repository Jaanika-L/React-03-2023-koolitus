import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Postitused from '../../components/postitused/Postitused';
import "./avaleht.css"



function Avaleht() {


  return (

    <>
      <Header />
      <div className='avaleht'>
        <Postitused />
        <Sidebar />
      </div>
    </>
  )
}

export default Avaleht