import React, { useState } from 'react'
import poedFailist from "../data/poed.json";

function Poed() { // array    list   massiiv    väärtuste kogum

  const [poed, uuendaPoed] = useState (poedFailist);
  
 const tagasiOriginaali = () => {
  uuendaPoed(poedFailist);
 }

  const sorteeriAZ = () => {
    poed.sort((a,b) => a.nimi.localeCompare(b.nimi));                  //default sorteerimine A-Z (sissekirjutatud) // poed.sort((a, b) => b.localeCompare(a));
      
    uuendaPoed(poed.slice()); // kustutab mälukoha/pärinemiskoha. Ei kustuta väärtusi. Reacti omapära
  }
    const sorteeriZA = () => {
      poed.sort((a,b) => b.nimi.localeCompare(a.nimi)); //mittedeafualt sorteerimine: (a,b) => TINGIMUST mille alusel sorteerida
      uuendaPoed(poed.slice()); //.nimi tuleb poed.jsonist

  }

  const sorteeriTahedKas =() => {
    poed.sort ((a,b) => a.nimi.length - b.nimi.length);
    uuendaPoed (poed.slice());

  }

  const sorteeriTahedKah = () => {
    poed.sort ((a,b) => b.nimi.length - a.nimi.length);
    uuendaPoed (poed.slice());
  }
const sorteeriKolmasTaht = () => {
    poed.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2]));
    uuendaPoed (poed.slice());

}
const filtreeriElopus = () => {
  const tulem = poed.filter(element => element.nimi.endsWith ("e"));
  uuendaPoed (tulem);
}
const filtreeriKellel9Tahte = () => {
const tulem = poed.filter(element => element.nimi.length === 9);
uuendaPoed(tulem);

}
const filtreeriKellelVahemalt7Tahte = () => {
  const tulem = poed.filter(element => element.nimi.length > 7);
  uuendaPoed(tulem);
}
const filtreeriSisaldabTaheLyhenditIs = () => {
  const tulem = poed.filter(element => element.nimi.includes ("is"));
  uuendaPoed(tulem);
}
const filtreeriKolmasTahtI = () => {
  const tulem = poed.filter(element => element.nimi[2] === "i" );
  uuendaPoed(tulem);
}
//map on asendamine .nimi käib keerulisemalt returniga. 
const muudaKoikSuureks = () => {
  const tulem = poed.map(yksPood => {return{ "nimi":yksPood.nimi.toUpperCase(), "tel": yksPood.tel}});
  uuendaPoed(tulem);
}
const muudaKoikVaikesteks =  ()=> {
  const tulem = poed.map(yksPood => {return{ "nimi":yksPood.nimi.toLowerCase(), "tel": yksPood.tel}});
  uuendaPoed(tulem);

}
const muudaKoikOTaheks = () => {
  const tulem = poed.map(yksPood => {return {"nimi": yksPood.nimi.replaceAll("i", "o"), "tel": yksPood.tel}});
  uuendaPoed(tulem);

}
const muudaKoikideleKriipsEtte = () => {
  const tulem = poed.map(yksPood => {return { nimi: "--" + yksPood.nimi, "tel": yksPood.tel}});
  uuendaPoed(tulem);

}
const muudaKoikidelKolmasTahtMTaheks = () => {
  const tulem = poed.map(yksPood => {return{ "nimi":yksPood.nimi + yksPood.nimi.length, "tel": yksPood.tel}});
  uuendaPoed(tulem);

}
  const arvutaTahedKokku = () => {
    let summa = 0;
    poed.forEach(element => summa = summa + element.nimi.length);
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
     
      {poed.map ((yksPood, i ) => <div key={i}>{yksPood.nimi}: {yksPood.tel}</div>)}  {/* {poed} siis kirjutab järjest aga ei ole sobilik - koodi kasutatakse */}
  
      
    </div>
  )
}

export default Poed