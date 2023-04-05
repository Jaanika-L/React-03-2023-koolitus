import {useState} from 'react'


function Meist() {
const [kontakt, n2itaKontakt] = useState("");
const tootajad = [
    {nimi: "Arvo Pärt",  ala: "Muusika", telefon: '+12345'},
    {nimi: "Kelly Sildaru", ala: "Reporter",telefon: '+123456'},
    {nimi: "Edward von Lõngus", ala: "Kujundus", telefon: '+1234567'},
    {nimi: "Kerli Kõiv", ala: "Välisturg", telefon: '+12345678'}
    
]

    return ( 
    <div>
        <div>See on meist leht, nähtlocalhost:3000/meist aadressilav</div>
        <div>Meie töötajad</div>
        <br />
        <div> {tootajad.map(tootaja =>
            <div>
                <div>{tootaja.nimi}</div>
                <div>{tootaja.ala}</div> 
                <button onClick={()=> n2itaKontakt(tootaja.telefon)}>Võta ühendust</button> 
            </div>)}
    </div>

        {/* <div>Arvo Pärt</div>
        <div>Meie väärtused</div>
        <div>Me teenime demokraatiat. Delfi Meedia kaasabil on Eesti avatud, informeeritud ja digitaalselt arenenud ühiskond.</div>
        <button onClick={() => n2itaKontakt ('+12345')}>Võta ühendust</button>
        <br /><br />
        <div>Kelly Sildaru</div>
        <div>Visioon</div>
        <div>Meie kaasabil on Eesti avatud, informeeritud ja digitaalselt arenenud ühiskond.</div>
        <button onClick={() => n2itaKontakt ('+123456')}>Võta ühendust</button>
        <br /><br />
        <div>Edward von Lõngus</div>
        <div>Veebimeedia</div>
        <div>Meie kaasabil on Eesti avatud, informeeritud ja digitaalselt arenenud ühiskond.</div>
        <button onClick={() => n2itaKontakt ('+1234567')}>Võta ühendust</button>
        <br /><br />
        <div>Kerli Kõiv</div>
        <div>Prindimeedia</div>
        <div>Meie kaasabil on Eesti avatud, informeeritud ja digitaalselt arenenud ühiskond.</div>
        <button onClick={() => n2itaKontakt ('+12345678')}>Võta ühendust</button> */}
        <br /><br />
        { kontakt !== "" && <div>Tema kontakt: {kontakt} </div>}
        
        
 </div> );
}

export default Meist;