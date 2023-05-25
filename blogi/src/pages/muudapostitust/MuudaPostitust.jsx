import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import config from "../../data/config.json"


function MuudaPostitust() {
    const {index} = useParams()
    const [leitudPostitused, setLeitudPostitused]=useState([]);
    const pealkiriRef = useRef()
    const sisuRef = useRef()
    // const piltRef=useRef()

  useEffect(() => {
    fetch(config.postitusedDbUrl)
    .then(res=> res.json())
    .then(json => {
      setLeitudPostitused(json ||[])
    })
    
  }, []);

  const muuda = () => {
    leitudPostitused[index] = {
        pealkiri: pealkiriRef.current.value,
        sisu: sisuRef.current.value}
        fetch(config.postitusedDbUrl,
            {"method": "PUT", "body": JSON.stringify(leitudPostitused)}
            )
    
  }

//   const leitud = leitudPostitused[index] ||[];
    
  return (
    <div>
        <label>Pealkiri</label><br />
        <input ref={pealkiriRef} type='text' defaultValue={leitudPostitused[index]?.pealkiri}/><br />
        <label>Sisu</label><br />
        <input ref={sisuRef} type='text' defaultValue={leitudPostitused[index]?.sisu}/><br />
        <label>Pilt</label><br />
        {/* <input ref={piltRef} type='file' defaultValue={leitudPostitused[index]?.pilt}/><br /> */}
        <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaPostitust