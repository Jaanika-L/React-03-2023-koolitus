import {useState} from 'react';


function Kontakt() {
const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);
  return (
<div>
    <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil  </div> 
    <div>Võta meiega ühendust</div>
    <br />
    <div onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine keskus</div>
    {n2itaTelKristiine && <div>+351231231</div> }
    <div>Endla 45</div>
    <br />
    <div onClick={()=> muudaN2itaTelYlemiste(!n2itaTelYlemiste)}>Ülemiste keskus</div>
    { n2itaTelYlemiste && <div>+370987652</div>}
    <div>Suur-Sõjamäe 4</div>
    <br />
    <div onClick={()=>muudaN2itaTelTasku(!n2itaTelTasku)}>Tasku keskus</div>
    { n2itaTelTasku && <div>+0987265334</div>}
    <div>Turu 2</div>
</div>);
}

export default Kontakt