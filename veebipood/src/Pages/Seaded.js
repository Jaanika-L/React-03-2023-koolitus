import React, { useState, useRef } from 'react'

function Seaded() {
    const[keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est"); //get item võtab viimase setItemi ja tema väärtuse
    const aadressViide=useRef();
    const emailViide=useRef();
    const telefonViide=useRef();


    const muudaKeelEst = () => {
        uuendaKeel ("est");
        localStorage.setItem("keel", "est"); //sissekirjutatud JavaScripti - salvestus brauserisse
        }
        const muudaKeelEng = () => {
            uuendaKeel ("eng"); // HTMLi jaoks
            localStorage.setItem("keel", "eng");  // pärast refreshi võetakse useState algväärtuseks
        }
        const muudaKeelRus = () => {
            uuendaKeel ("rus");
            localStorage.setItem("keel", "rus");
            }

// label htmlFor= WCAG - web contet accebility guidelines,ehk nö raskustega inimestele selle võib hetkel ära kustutada
            const salvestaAadress =()=>{
                localStorage.setItem("aadress", aadressViide.current.value);

            }
            const salvestaEmail =()=>{
                localStorage.setItem("email", emailViide.current.value);

            }
            const salvestaTelefon =()=>{
                localStorage.setItem("telefon", telefonViide.current.value);

            }
return (
    <div>
        <label>Meie aadress</label>
        <input ref={aadressViide} type="text" />
        <button onClick ={salvestaAadress}>Sisesta</button>
        <br /><br />

        <label>Meie email</label>
        <input ref={emailViide}type="text" />
        <button onClick={salvestaEmail}>Sisesta</button>
        <br /><br />

        <label>Meie telefon</label>
        <input ref={telefonViide} type="text" />
        <button onClick={salvestaTelefon}>Sisesta</button>
        <br /><br />

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