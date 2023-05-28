import React, { useEffect, useState } from 'react'
import config from "../../data/config.json"
import { Link } from 'react-router-dom';
// import Postitus from "../../components/postitus/Postitus"
import "./postitused.css"
import Sidebar from '../sidebar/Sidebar';
import { formatDistanceToNow } from 'date-fns';
function Postitused() {

  const [postitused, muudaPostitused] = useState([]); //alati pannakse siia tühi array, kui oodatakse vastust
  const formatDate = (date) => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      return ''; // Return empty string for invalid dates
    }
    return formatDistanceToNow(parsedDate, { addSuffix: true });
  }

  useEffect(() => {
    fetch(config.postitusedDbUrl)
      .then(res => res.json())
      .then(json => muudaPostitused(json) || [])

  }, []);


  const [klikitudPostitus, uuendaKliklitudPostitus] = useState("");

  const kuvaPostitus = (postitus) => {
    uuendaKliklitudPostitus(postitus.pealkiri);
  }


  return (

    <div>
      <Sidebar />
      {klikitudPostitus !== "" && <div>Klikkisid postituse {klikitudPostitus}</div>}
      <div className='postitused'>
        {postitused.map((postitus, index) =>

          <div className='postitus'>
            <Link to={"/yks-postitus/" + index} onClick={() => kuvaPostitus(postitus)}>

            {postitus.pilt &&
              <img className='postituse-pilt' src={postitus.pilt} alt="Postituse pilt" />}
            <div className='postituse-pealkiri'>{postitus.pealkiri}</div>

            <div className='postituse-sisu'>{postitus.sisu}</div>
            <div className='postituse-aeg'>{formatDate(postitus.aeg)}</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}


export default Postitused