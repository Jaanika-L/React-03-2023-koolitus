import React, { useState } from 'react'

function Numbrid() {
const [numbrid, uuendaNumbrid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 29, 123]);

const tagasiOriginaali = () => {
    uuendaNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 29, 123]);
}

const esimeseNrJargi = () => {
    numbrid.sort((a,b) => a.toString().localeCompare(b.toString()));
    uuendaNumbrid(numbrid.slice());
}

const vastupidiEsimeseNrJargi =() => {
    numbrid.sort((a,b) => b.toString().localeCompare(a.toString()));
    uuendaNumbrid(numbrid.slice());
}

const kasvavalt = () => {
    numbrid.sort((a,b) => a-b);
    uuendaNumbrid(numbrid.slice());
}

const kahanevalt = () => {
    numbrid.sort((a,b) => b-a);
    uuendaNumbrid(numbrid.slice());
}

const suuremadKuiKaheksa = () => {
    const tulem = numbrid.filter (e =>  e > 8);
    uuendaNumbrid(tulem);
}

const vaiksemadKuiKymme = () => {
    const tulem = numbrid.filter (e => e < 10);
    uuendaNumbrid(tulem);
}
const paarisarvud = () => {
    const tulem = numbrid.filter(e => e % 2 === 0);
    uuendaNumbrid(tulem);
}
const paaritudArvud = () => {
    const tulem = numbrid.filter (e => e % 2 !== 0);
    uuendaNumbrid(tulem)
}  
const korrutadaKahega = () => {
    const tulem = numbrid.map ((num) => num * 2);
    uuendaNumbrid(tulem);
}
const jagaKolmega = () =>{
    const tulem = numbrid.map ((num) => num / 3);
    uuendaNumbrid(tulem);
}
const liidaKymme = () => {
    const tulem = numbrid.map ((num) => num + 10);
    uuendaNumbrid(tulem);

}
const lahutaYks = () => {
    const tulem = numbrid.map ((num) => num - 1);
    uuendaNumbrid(tulem);

}

return (
    <div>
        <div>Tooteid kokku:{numbrid.length}tk</div>
        {numbrid.map(el => <div>{el}</div>)}

        <button onClick={tagasiOriginaali}>Tagasi originaali</button>
        <br />
        <button onClick={esimeseNrJargi}>Kuva esimese numbri järgi</button>
        <button onClick={vastupidiEsimeseNrJargi}>Kuva vastupidises järjekorras esimese nr järgi</button>
        <button onClick={kasvavalt}>Kuva nr suuruse järgi kasvavalt</button>
        <button onClick={kahanevalt}>Kuva nr suuruse järgi kahanevalt</button>
        <br /><br />
        <button onClick={suuremadKuiKaheksa}>Jäta alles suuremad kui 8</button>
        <button onClick={vaiksemadKuiKymme}>Jäta alles väiksemad kui 10</button>
        <button onClick={paarisarvud}>Jäta alles paaris arvud</button>
        <button onClick={paaritudArvud}>Jäta alles paaritud arvud</button>
        <br /><br />
        <button onClick={korrutadaKahega}>Korruta kõik kahega</button>
        <button onClick={jagaKolmega}>Jaga kõik kolmega</button>
        <button onClick={liidaKymme}>Liida kõigile 10 juurde</button>
        <button onClick={lahutaYks}>Lahuta igaltühelt 1</button>
        <br /><br />
   </div>
  )
}

export default Numbrid