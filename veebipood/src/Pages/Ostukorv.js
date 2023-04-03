import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);


  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode);
    uuendaOstukorv(ostukorv.slice());
  }

  const kustuta = (jarjekorranumber) => { //järjekorra nr on JavaS nullist alustav
    ostukorv.splice(jarjekorranumber,1); // vasakpoolne nr tähendab mitmendat ma kustutan, parempoolne mitu tk ma kustutan
    uuendaOstukorv(ostukorv.slice());
  }

  const tyhjenda = () => {
    ostukorvFailist= []; // anna faili rühja array, kus pole sees midagi
    uuendaOstukorv([]); // uuendan HTMLs tühja array vastu
    //uuendaOstukorv(ostukorvfailist) - võib ka kasutada
  } 

  const arvutaKoguSumma = () =>{
    let summa = 0;
    ostukorv.forEach(toode => summa = summa + toode.hind);
    return summa;
  }
  
  return (
    <div>
      {/* vasakul pool pean ütlema, mis tingimustel OM NÄHTAV */}
      { ostukorv.length > 0 && <button onClick={tyhjenda}> Tühjenda</button> } 
      { ostukorv.length > 0 && <div>Ostukorvis esemeid kokku : {ostukorv.length} tk </div> }
      {ostukorv.map((toode, jrkNr) => 
        <div key={jrkNr}>
          <img className="pilt"src={toode.pilt} alt="" />
          {toode.nimi}
          {toode.hind}
          <button onClick={() => lisa(toode)}>+</button>
          <button onClick={()=>kustuta(jrkNr)}>-</button>
        </div>
      )}

        
      { ostukorv.length === 0 && <div>Ostukorv on tühi. <Link to="/"> Tooteid lisama. </Link></div>} 
      <div> Kokku: {arvutaKoguSumma()} €</div>
    </div>
  )
}


export default Ostukorv