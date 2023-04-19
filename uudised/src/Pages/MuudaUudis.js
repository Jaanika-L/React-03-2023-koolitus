import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'

function MuudaUudis() {
const {index} = useParams();
const uudisedLs = JSON.parse(localStorage.getItem("uudised")) || [];
const leitudUudis = uudisedLs[index];
const uudisRef = useRef();

const muuda = () => {
    //localStoragestSaadudVäärtused[URLparameetristSaadudNumber]
    // = inputSisestatudVäärtustSaadudRefSeest.current.value;
    uudisedLs[index] = uudisRef.current.value;
    //Teeme localStorage-s uuenduse 
    //localStorage.setItem(“uudised”, JSON.stringify(UUS_VÄÄRTUS)); abil
    localStorage.setItem("uudised", JSON.stringify(uudisedLs));

}

  return (
    <div>
        <label>Uudis</label><br />
            <input ref={uudisRef} defaultValue={leitudUudis} type="text" /> <br />
            <button onClick={muuda}>Muuda</button><br />
        
    </div>
  )
}

export default MuudaUudis