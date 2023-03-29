import React, { useState } from 'react'
import poedFailist from "../data/poed.json";

function Poed() { // array    list   massiiv    väärtuste kogum

  const [poed, uuendaPoed] = useState (poedFailist);
  
 const tagasiOriginaali = () => {
  uuendaPoed(poedFailist);
 }

  const sorteeriAZ = () => {
    poed.sort();                  //default sorteerimine A-Z (sissekirjutatud) // poed.sort((a, b) => b.localeCompare(a));
      
    uuendaPoed(poed.slice()); // kustutab mälukoha/pärinemiskoha. Ei kustuta väärtusi. Reacti omapära
  }
    const sorteeriZA = () => {
      poed.sort((a,b) => b.localeCompare(a)); //mittedeafualt sorteerimine: (a,b) => TINGIMUST mille alusel sorteerida
      uuendaPoed(poed.slice());

  }

  const sorteeriTahedKas =() => {
    poed.sort ((a,b) => a.length - b.length);
    uuendaPoed (poed.slice());

  }

  const sorteeriTahedKah = () => {
    poed.sort ((a,b) => b.length - a.length);
    uuendaPoed (poed.slice());
  }
const sorteeriKolmasTaht = () => {
    poed.sort((a,b) => a[2].localeCompare(b[2]));
    uuendaPoed (poed.slice());

}
const filtreeriElopus = () => {
  const tulem = poed.filter(element => element.endsWith ("e"));
  uuendaPoed (tulem);
}
const filtreeriKellel9Tahte = () => {
const tulem = poed.filter(element => element.length === 9);
uuendaPoed(tulem);

}
const filtreeriKellelVahemalt7Tahte = () => {
  const tulem = poed.filter(element => element.length > 7);
  uuendaPoed(tulem);
}
const filtreeriSisaldabTaheLyhenditIs = () => {
  const tulem = poed.filter(element => element.includes ("is"));
  uuendaPoed(tulem);
}
const filtreeriKolmasTahtI = () => {
  const tulem = poed.filter(element => element[2] === "i" );
  uuendaPoed(tulem);
}

const muudaKoikSuureks = () => {
  const tulem = poed.map(yksPood => yksPood.toUpperCase());
  uuendaPoed(tulem);
}
const muudaKoikVaikesteks =  ()=> {
  const tulem = poed.map(yksPood => yksPood.toLowerCase());
  uuendaPoed(tulem);

}
const muudaKoikOTaheks = () => {
  const tulem = poed.map(yksPood => yksPood.replaceAll("i", "o"));
  uuendaPoed(tulem);

}
const muudaKoikideleKriipsEtte = () => {
  const tulem = poed.map(yksPood => "--" + yksPood);
  uuendaPoed(tulem);

}
const muudaKoikidelKolmasTahtMTaheks = () => {
  const tulem = poed.map(yksPood => yksPood + yksPood.length);
  uuendaPoed(tulem);

}
  const arvutaTahedKokku = () => {
    let summa = 0;
    poed.forEach(element => summa = summa + element.length);
    return summa;

  }




  return (
    <div>
      <button onClick={tagasiOriginaali}>Tagasi originaali</button>
      <div>Poode on kokku: {poed.length} tk </div>
      <div>Kõikide poodide tähemärkide arv on: {arvutaTahedKokku()} </div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKas}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriKolmasTaht}>Sorteeri kolmanda tähe järgi</button>
      <br /> <br />
      <button onClick={filtreeriElopus}>Filtreeri kellel "e" lõpus</button>
      <button onClick={filtreeriKellel9Tahte}>Filtreeri kellel 9 tähte</button>
      <button onClick={filtreeriKellelVahemalt7Tahte}>filtreeri kellel vähemalt 7 tähte</button>
      <button onClick={filtreeriSisaldabTaheLyhenditIs}>filtreeri kellel sisaldab lühendit is</button>
      <button onClick={filtreeriKolmasTahtI }>Filtreeri kellel on kolmas täht i</button>
      <br /><br />
      <button onClick={muudaKoikSuureks}>Muuda kõik suurteks tähtedeks</button>
      <button onClick={muudaKoikVaikesteks}>Muuda kõik väikesteks tähtedeks</button>
      <button onClick={muudaKoikOTaheks}> Muuda kõikidel i täht o tähtedeks</button>
      <button onClick={muudaKoikideleKriipsEtte}>Muuda kõikidele "--" ette</button>
      <button onClick={muudaKoikidelKolmasTahtMTaheks}>Muuda kõikidele sõna pikkused numbrid lõppu</button>
      {poed.map ((yksPood, i ) => <div key={i}>{yksPood}</div>)}  {/* {poed} siis kirjutab järjest aga ei ole sobilik - koodi kasutatakse */}
  
      <div>-------------------</div>
      <div>Ülemiste</div>
      <div>Viimsi</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div>
    </div>
  )
}

export default Poed