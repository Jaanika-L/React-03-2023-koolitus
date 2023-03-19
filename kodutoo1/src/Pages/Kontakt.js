import React from 'react'
import {useState} from 'react'

function Kontakt() {
const [aadress, m22raAadress] =useState("Tallinn");
const [telefon, m22raTelefon] = useState("12345678");
const [email, m22raEmail] = useState ("blaa@blaa.ee");
const [ingliseKeelne, m22raIngliseKeelne] = useState ("ei");

const ingliseks = () => {
  m22raAadress("London");
  m22raTelefon("09876543");
  m22raEmail("london@london.ee");
  m22raIngliseKeelne("jah");
}
  return (
    <div>
      
      <div>{aadress}</div>
      <div>{telefon}</div>
      <div>{email}</div>
      <button onClick={ingliseks}> Muuda inglise keelseks</button>
      { ingliseKeelne === "jah" && <div>Leht on inglise keelne</div>}
      
      
      </div>
  )
}

export default Kontakt