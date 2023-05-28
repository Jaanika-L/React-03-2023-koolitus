import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns';

import config from "../../data/config.json"
import "./ykspostitus.css"
// import Sidebar from '../../components/sidebar/Sidebar';


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

  const formatDate = (date) => {
    const parsedDate = new Date(date)
    if (isNaN(parsedDate)) {
      return
    }
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  }

  const kustutapostitus = (index) => {
    leitudPostitused.splice(index, 1);
    setLeitudPostitused(leitudPostitused.slice());
    fetch(config.postitusedDbUrl,
      { "method": "PUT", "body": JSON.stringify(leitudPostitused) }
    )
  }

  
  return (
    <div>
      {/* <Sidebar/> */}

      <div className='yks-postitus'>
        {leitud.pilt && <img className='yhe-postituse-pilt' src={leitud.pilt} alt="Postituse pilt" />}
        <h1 className='yhe-postituse-pealkiri'>{leitud.pealkiri}
        </h1>
        <div className='yhe-postituse-muutmine'>
          <Link to={"/muuda-postitust/" + index}>
            <i className="yhe-postituseIkoon fa-regular fa-pen-to-square"></i>
          </Link>
            <i onClick={()=>kustutapostitus(index)} className="yhe-postituseIkoon fa-solid fa-trash"></i>
        </div>
        <div className='yhe-postituse-info'>
          <span className='yhe-postituse-aeg'>{formatDate(leitud.aeg)}</span>
        </div>
        <p className='yhe-postituse-sisu'>{leitud.sisu}</p>
      </div>

    </div>

  )
}


export default YksPostitus
