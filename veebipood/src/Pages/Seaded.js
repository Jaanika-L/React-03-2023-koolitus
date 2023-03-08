import React, { useState } from 'react'

function Seaded() {
    const[keel, uuendaKeel] = useState("est");

    const muudaKeelEst = () => {
        uuendaKeel ("est");
        }
        const muudaKeelEng = () => {
            uuendaKeel ("eng");  
        }
        const muudaKeelRus = () => {
            uuendaKeel ("rus");
            }


  return (
    <div>
        <button onClick={muudaKeelEst}>Eesti keelseks</button>
        <button onClick={muudaKeelEng}>to English</button>
        <button onClick={muudaKeelRus}>Pyccku</button>
        {keel === "est" && <div>Leht on eesti keelne</div>}
        {keel === "eng" && <div>The page is in English</div>}
        {keel === "rus" && <div>Pyccku Rcõk</div>}

    </div>
  )
}

export default Seaded