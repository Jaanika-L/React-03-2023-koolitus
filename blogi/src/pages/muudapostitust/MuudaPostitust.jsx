import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import config from "../../data/config.json"
import "./muudapostitust.css"



function MuudaPostitust() {
    const {index} = useParams()
    const [leitudPostitused, setLeitudPostitused]=useState([]);
    const pealkiriRef = useRef()
    const sisuRef = useRef()
    const piltRef = useRef()
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
        sisu: sisuRef.current.value,
        pilt: piltRef.current.value }
        fetch(config.postitusedDbUrl,
            {"method": "PUT", "body": JSON.stringify(leitudPostitused)}
            )
    
  }

//   const leitud = leitudPostitused[index] ||[];
    
  return (
    <div className='form-container'>
      <form className='form'>
        <div className='form-group'>
        <input className='form-input' ref={pealkiriRef} type='text' defaultValue={leitudPostitused[index]?.pealkiri}/><br />
        <input className='form-sisu' ref={sisuRef} type='text' defaultValue={leitudPostitused[index]?.sisu}/><br />
        
        <input className='form-input' ref={piltRef} type='url' defaultValue={leitudPostitused[index]?.pilt}/><br />
        </div>
        <button className='form-button' onClick={muuda}>Muuda</button>
        </form>
    </div>
  )
}

export default MuudaPostitust