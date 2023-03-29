import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'; //võetakse npmjs.com veebilehelt

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
                if(aadressViide.current.value[0] === aadressViide.current.value[0].toLowerCase()) {
                    toast.error("Tühja aadressi ei saa sisestada!")
                    return;
                }
                // if/ else <---- teeme kontrolli, kas on meile sobiv sisu
                // else asemel return
                // react-toastify <----hüpikaken
                if(aadressViide.current.value === "") {
                    toast.error("Tühja aadressi ei saa sisestada!")
                    return;
                }
                    toast.success("Aadress edukalt sisestatud!")
                localStorage.setItem("aadress", aadressViide.current.value);

            }
            const salvestaEmail =()=>{
                if(emailViide.current.value === "") {
                    toast.error("Tühja emaili ei saa sisestada!")
                    return;
        
                }
                if(emailViide.current.value.includes("@") === false) {
                    toast.error("Emaili ei saa sisestada ilma @ märgita!")
                    return;
        
                }
                    toast.success("Email edukalt sisestatud!");
                localStorage.setItem("email", emailViide.current.value);

            }
            const salvestaTelefon =()=>{
                if(telefonViide.current.value === "") {
                    toast.error("Tühja telefoni nr ei saa sisestada!")
                    return;
                }
                if(/^[0-9]*$/.test(telefonViide.current.value) === false) {
                    toast.error("Telefoni nr peab koosnema ainult numbritest")
                    return;
                }
                toast.success("Telefoni nr edukalt sisestatud!")
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
        <ToastContainer /> 
        {/* Võetud npmjs.com lehelt */}
    </div>
  )
}

export default Seaded