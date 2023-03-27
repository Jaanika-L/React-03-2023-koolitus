import React, { useState } from 'react'
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
      </div> )}
    </div>
  )
}

export default HaldaTooteid