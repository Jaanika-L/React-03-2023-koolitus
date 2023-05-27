import "./postitus.css"
import React, { useEffect, useState } from 'react'
import config from "../../data/config.json"
import { Link } from 'react-router-dom';

function Postitus() {
    const [postitused, muudaPostitused] = useState([]); //alati pannakse siia tühi array, kui oodatakse vastust

    useEffect(() => {
      fetch(config.postitusedDbUrl)
        .then(res => res.json())
        .then(json => muudaPostitused(json) || [])
  
    }, []);
  
  
    const [klikitudPostitus, uuendaKliklitudPostitus] = useState("");
  
    const kuvaPostitus = (postitus) => {
      uuendaKliklitudPostitus(postitus.pealkiri);
    }
  
    const valiPostitus = (valitudPostitus) => {
      const valitud = JSON.parse(localStorage.getItem("valitudPostitused")) || [];
      valitud.push(valitudPostitus)
      localStorage.setItem("valitudPostitused", JSON.stringify(valitud));
    }
  
  
    const deletePostitus = (index) => {
      postitused.splice(index, 1)
      muudaPostitused(postitused.slice())
      fetch(config.postitusedDbUrl,
        { "method": "PUT", "body": JSON.stringify(postitused) }
      )
    }
    return (
  
      <div>
        {klikitudPostitus !== "" && <div>Klikkisid postituse {klikitudPostitus}</div>}
        {postitused.map((postitus, index) =>
          <div  className='postitus'>
            {postitus.pilt &&
              <img className='postituse-pilt' src={postitus.pilt} alt="Postituse pilt" />}
            <div className='postituse-pealkiri'>{postitus.pealkiri}</div>
            <div className='postituse-sisu'>{postitus.sisu}</div>
            <div className='postituse-aeg'>{postitus.aeg}</div><br />
                <div className="nupud"> 
             <button className='nupp' onClick={() => deletePostitus(index)}>Kustuta</button><br />
            <button className='nupp' onClick={() => valiPostitus(postitus)}>Vali</button><br />
            <Link to={"/yks-postitus/" + index}>
              <button className='nupp' onClick={() => kuvaPostitus(postitus)}>Kuva</button>
            </Link> 
            </div>
          </div>
        )}
      </div>
    )
  }
  
export default Postitus