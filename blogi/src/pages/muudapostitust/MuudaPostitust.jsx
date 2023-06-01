import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import config from "../../data/config.json"
import "./muudapostitust.css"
import { useTranslation } from 'react-i18next'



function MuudaPostitust() {
  const { index } = useParams()
  const [leitudPostitused, setLeitudPostitused] = useState([]);
  const pealkiriRef = useRef()
  const sisuRef = useRef()
  const piltRef = useRef()
  const kategooriaRef = useRef();
  // const piltRef=useRef()
  const { t } = useTranslation();


  useEffect(() => {
    fetch(config.postitusedDbUrl)
      .then(res => res.json())
      .then(json => {
        setLeitudPostitused(json || [])
      })

  }, []);

  const muuda = () => {
    leitudPostitused[index] = {
      pealkiri: pealkiriRef.current.value,
      sisu: sisuRef.current.value,
      pilt: piltRef.current.value,
      kategooria: kategooriaRef.current.value,
      aeg: new Date()
    }
    fetch(config.postitusedDbUrl,
      { "method": "PUT", "body": JSON.stringify(leitudPostitused) }
    )

  }

  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }


  return (
    <div className='form-container'>
      <form className='form'>
        <div className='form-group'>
          <label className='label'>{t("picture")}</label><br />
        <input className='form-input' ref={piltRef} type='url' defaultValue={leitudPostitused[index]?.pilt} /><br />
<label className='label'>{t("change-category")}</label><br />
        <select className='form-input' ref={kategooriaRef} defaultValue={leitudPostitused[index]?.kategooria}>
            <option>{t("category")}</option>
            <option value="Linnud">Linnud</option>
            <option value="Loodus">Loodus</option>
            <option value="Loomad">Loomad</option>
            <option value="Putukad">Putukad</option>
          </select><br />
          <label className='label'>{t("title")}</label><br />
          <input className='form-input' ref={pealkiriRef} type='text' defaultValue={leitudPostitused[index]?.pealkiri} /><br />
          <label className='label'>{t("content")}</label><br />
          <textarea className='form-sisu' rows="30"  ref={sisuRef} type='text' defaultValue={leitudPostitused[index]?.sisu} >
          </textarea>

          <input
            className='form-input'
            type='text'
            value={formatDate(leitudPostitused[index]?.aeg)}
            disabled
          />
        </div>
        <Link to={"/"}>
        <button className='form-button' onClick={muuda}>{t("change")}</button>
        </Link>
      </form>
    </div>
  )
}

export default MuudaPostitust