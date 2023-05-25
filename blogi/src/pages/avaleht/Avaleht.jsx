// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import "./avaleht.css"
// import config from "../../data/config.json"
import Sidebar from '../../components/sidebar/Sidebar';
import Postitused from '../../components/posts/Postitused';


function Avaleht() {

  // const [postitused, muudaPostitused]=useState([]); //alati pannakse siia tühi array, kui oodatakse vastust

  // useEffect(() => {
  //   fetch(config.postitusedDbUrl)
  //   .then(res=> res.json())
  //   .then(json => muudaPostitused(json) || [])
    
  // }, []);

  
  // const [klikitudPostitus, uuendaKliklitudPostitus] = useState("");

  // const kuvaPostitus = (postitus) => {
  //   uuendaKliklitudPostitus(postitus.pealkiri);
  // }

  // const valiPostitus = (valitudPostitus) => {
  //   const valitud = JSON.parse(localStorage.getItem("valitudPostitused")) || [];
  //   valitud.push(valitudPostitus)
  //   localStorage.setItem("valitudPostitused", JSON.stringify(valitud));
  // }


  // const deletePostitus = ( index )=> {
  //   postitused.splice (index,1)
  //   muudaPostitused(postitused.slice())
  // fetch(config.postitusedDbUrl,
  // {"method": "PUT", "body": JSON.stringify(postitused)}
  // )
  // } 
  return (
   
    <>
          
            <Header/>
            <div className='avaleht'>
            <Postitused/>
          <Sidebar/>  
          
          
      {/* { klikitudPostitus !== "" && <div>Klikkisid postituse {klikitudPostitus}</div>}
      {postitused.map((postitus,index) =>
        <div>
          <div className='postituse-pealkiri'>{postitus.pealkiri}</div><br />
          <div className='postituse-sisu'>{postitus.sisu}</div>
          <div className='postituse-aeg'>{postitus.aeg}</div>
          <button className='nupp' onClick={()=>deletePostitus(index)}>Kustuta</button><br />
          <button className='nupp' onClick={()=>valiPostitus(postitus)}>Vali</button><br />
          <Link to={"/yks-postitus/" + index}>
          <button className='nupp' onClick={()=>kuvaPostitus(postitus)}>Kuva</button>
          </Link>
        </div>
        )} */}
    </div>
    </>
  )
}

export default Avaleht