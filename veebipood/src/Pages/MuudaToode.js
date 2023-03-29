import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const{index} = useParams(); // App.js failis: path="muuda/:index"
  const leitud = tootedFailist[index];
  const nimiRef = useRef();

const muuda =() => {
  tootedFailist[index] = nimiRef.current.value;
  //["bmw", "nobe", "tesla"][0] = "audi"---> ["audi", "nobe", "tesla"]
}
  
return (
    <div>
      {leitud !== undefined &&
      <div>
       <label>Toote nimi</label> <br />
        <input type="text" ref={nimiRef} defaultValue={leitud} /> <br />
        <button onClick={muuda}>Uuenda</button> <br />
      </div>
        }
      
     { <div>
        {leitud === undefined && <div>Tooteid ei leitud</div>}
      </div>}
    </div>
  )
}

export default MuudaToode