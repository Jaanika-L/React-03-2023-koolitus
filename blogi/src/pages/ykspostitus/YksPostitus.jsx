import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import config from "../../data/config.json"
import "./ykspostitus.css"
import Sidebar from '../../components/sidebar/Sidebar';


function YksPostitus() {
  const { index } = useParams()

  const [leitudPostitused, setLeitudPostitused] = useState([]);

  useEffect(() => {
    fetch(config.postitusedDbUrl)
      .then(res => res.json())
      .then(json => {
        setLeitudPostitused(json || [])
      })

  }, []);

  const leitud = leitudPostitused[index] || [];


  return (
<div>
  <Sidebar/>
    <div className='yks-postitus'>
      <div className='yks-postitus-kokku'>
        {leitud.pilt && <img className='yhe-postituse-pilt' src={leitud.pilt} alt="Postituse pilt" />}
        <h1 className='yhe-postituse-pealkiri'>{leitud.pealkiri}
        </h1>
        <div className='yhe-postituse-muutmine'>
          <i className="yhe-postituseIkoon fa-regular fa-pen-to-square"></i>
          <i className="yhe-ostituseIkoon fa-solid fa-trash"></i>
        </div>

        <div className='yhe-postituse-info'>
          <span className='yhe-postituse-aeg'>{leitud.aeg}</span>
        </div>
        <p className='yhe-postituse-sisu'>{leitud.sisu}</p>
      </div>
    </div>
    </div>

  )
}


export default YksPostitus
