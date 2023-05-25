import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import config from "../../data/config.json"
import "./ykspostitus.css"
// import Sidebar from '../../components/sidebar/Sidebar';


function YksPostitus() {
  const {index} = useParams()
  // const postitused = JSON.parse(localStorage.getItem("postitused")) ||[];

  const [leitudPostitused, setLeitudPostitused]=useState([]);

  useEffect(() => {
    fetch(config.postitusedDbUrl)
    .then(res=> res.json())
    .then(json => {
      setLeitudPostitused(json ||[])
    })
    
  }, []);

  const leitud = leitudPostitused[index] || [];

  
  return (
    <div className='postitus'>
      {/* <div>
        <Sidebar/>
      </div> */}
      {leitud.pilt && <img className='postituse-pilt' src={leitud.pilt} alt="Postituse pilt" /> }
      <div className='postituse-pealkiri'>{leitud.pealkiri}</div><br /><br />
      <div className='postituse-sisu'>{leitud.sisu}</div>
      <div className='postituse-aeg'>{leitud.aeg}</div>
      
    </div>
  )
}

export default YksPostitus