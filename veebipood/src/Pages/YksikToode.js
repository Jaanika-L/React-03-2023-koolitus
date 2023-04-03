import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"

function YksikToode() {
  const{jrkNr}=useParams(); //App.js sees path="toode/:jrkNr"
  // useParams()
  // const leitud = [ "nobe", "tesla", "bmw"] [1]
  // kustutamine: ["nobe", "tesla","bmw"].splice(1,1);
  const leitud = tootedFailist[jrkNr];
  return (
    <div>
      {leitud !== undefined &&<div>
      <div>Toote nimetus: {leitud.nimi}</div>
      <div>Toote hind: {leitud.hind}</div>
      <div>Toode on järjekorras number: {Number(jrkNr)+1}</div>
      <img className="pilt"src={leitud.pilt} alt="" />
      {/* <div>Toote pilt on: ........</div> */}
      </div>}
      {leitud === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default YksikToode