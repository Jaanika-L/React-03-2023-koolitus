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
      <div key={ix}>
        {el} 
       <button onClick={()=>kustuta(ix)}>x</button>
       <Link to={"/muuda/" + ix}>
        <button>Muuda</button>
       </Link>
      </div> )}
    </div>
  )
}

export default HaldaTooteid