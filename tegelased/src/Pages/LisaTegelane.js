import React from 'react'
import {useState, useRef} from 'react'

function LisaTegelane() {
  
  const [sonum, uuendaSonum] = useState("");
  const eesnimiRef = useRef();
  const perekonnanimiRef = useRef();
  const elukohtRef = useRef();
  const vanusRef = useRef();
 
 
  const lisaUusTegelane = () =>{
    if (eesnimiRef.current.value === ""){
        uuendaSonum("Tühja nimega ei saa sisesstada");
   } else {
        uuendaSonum("Tegelane lisatud");
        const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
        tegelased.push({
          "eesnimi": eesnimiRef.current.value,
          "perekonnanimi": perekonnanimiRef.current.value,
          "elukoht":elukohtRef.current.value,
          "vanus": Number(vanusRef.current.value)
        })
        localStorage.setItem("tegelased", JSON.stringify(tegelased));
      }
   }
  return (
   <div>
    <div>{sonum}</div>
    <label>Tegelase nimi</label><br />
    <input ref={eesnimiRef} type ="text"/> <br />
    <label>Tegelase perekonnanimi</label><br />
    <input ref={perekonnanimiRef} type ="text"/> <br />
    <label>Tegelase elukoht</label><br />
    <input ref={elukohtRef} type ="text"/> <br />
    <label>Tegelase vanus</label><br />
    <input ref={vanusRef} type ="number"/> <br />
    <button onClick={lisaUusTegelane}>Lisa uus</button> <br />
    </div>
  )
}

export default LisaTegelane