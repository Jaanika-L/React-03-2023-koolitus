import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import tootedFailist from "../data/tooted.json"




function HaldaTooteid() {
const [tooted, uuendaTooted] = useState (tootedFailist);

const kustuta = (index) => {
  tootedFailist.splice (index, 1);
  uuendaTooted(tootedFailist.slice());
}

  return (
    <div>
      <div>Tooteid kokku: {tooted.length} tk</div>
      {tooted.map((el, ix) => 
      <div className={el.aktiivne === true ? "aktiivne-toode" : "mitteaktiivne-toode" } key={ix}>
        <img className="pilt"src={el.pilt} alt="" />
        <div>{el.nimi}</div>
        <div>{el.hind}</div> 
        <div>{el.pilt}</div>
        <div>{el.aktiivne + 0}</div>
       <button onClick={()=>kustuta(ix)}>x</button>
       <Link to={"/muuda/" + ix}>
        <button>Muuda</button>
       </Link>
      </div> )}
    </div>
  )
}

export default HaldaTooteid