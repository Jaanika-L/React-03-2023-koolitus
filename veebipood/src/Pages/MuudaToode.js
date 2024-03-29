import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const{index} = useParams(); // App.js failis: path="muuda/:index"
  const leitud = tootedFailist[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

const muuda =() => {
  tootedFailist[index] = {
    "nimi": nimiRef.current.value,
    "hind": Number(hindRef.current.value),
    "pilt": piltRef.current.value,
     "aktiivne": aktiivneRef.current.checked
  };
  //["bmw", "nobe", "tesla"][0] = "audi"---> ["audi", "nobe", "tesla"]
}
  
return (
    <div>
      {leitud !== undefined &&
      <div>
       <label>Toote nimi</label> <br />
        <input type="text" ref={nimiRef} defaultValue={leitud.nimi} /> <br />
        <label>Toote hind</label> <br />
        <input type="number" ref={hindRef} defaultValue={leitud.hind} /> <br />
        <label>Toote pilt</label> <br />
        <input type="text" ref={piltRef} defaultValue={leitud.pilt} /> <br />
        <label>Toote aktiivsus</label> <br />
        <input type="checkbox" ref={aktiivneRef} defaultChecked={leitud.aktiivne} /> <br />
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