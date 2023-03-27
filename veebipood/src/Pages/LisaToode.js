import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json"

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef(); //use...'id on Reacti erikoodid, mida tuleb alati importida.

 // function lisa() {} teeb const lisa = () => {} sama asja 
 const lisa = () => {
  if (inputiLuger.current.value === ""){
    uuendaSonum("Tühja nimetusega ei saa toodet lisada!");
    
  } else { 
    uuendaSonum("Toode nimega " + inputiLuger.current.value + " lisatud!");
    tootedFailist.push(inputiLuger.current.value);
  }
 
 }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode