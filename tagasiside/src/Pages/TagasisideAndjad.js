import React, { useRef, useState } from 'react'
import nimedFailist from "../nimed.json"

function TagasisideAndjad() {

    const [tagasisideAndjad, määraTagasisideAndjad] = useState(nimedFailist)
    const nimiL6ppuRef =useRef();
    
    const tagasiOriginaali = () => {
        määraTagasisideAndjad(nimedFailist);
    }

    const kustuta = (index) => {
        tagasisideAndjad.splice(index,1);
        määraTagasisideAndjad(tagasisideAndjad.slice());
    }

    const mT2hega = () =>{
     const tulem = tagasisideAndjad.filter(el => el.startsWith("M"))
    määraTagasisideAndjad (tulem);
    }

    const kuueKohalised = () => {
        const tulem = tagasisideAndjad.filter (el => el.length === 6);
        määraTagasisideAndjad (tulem);

    }
    const lõppebY = () => {
        const tulem = tagasisideAndjad.filter (el => el.endsWith ("y"))
        määraTagasisideAndjad(tulem);

    }
    const sorteeriZA = () =>  {
        tagasisideAndjad.sort((a,b) => b.localeCompare(a));
        määraTagasisideAndjad (tagasisideAndjad.slice());

    }
    const etteEst = () => {
        const tulem = tagasisideAndjad.map (el => 'EST-' + el);
        määraTagasisideAndjad (tulem);
    }
   
    const lisaNimi = () => {
      tagasisideAndjad.push(nimiL6ppuRef.current.value);
      määraTagasisideAndjad(tagasisideAndjad.slice());

    }



  return (
    <div>
        <div>Tagasiside andjad: {nimedFailist.length} tk </div>
       
       
        {tagasisideAndjad.map ((el, index) => 
        <div key={el}>
            {el} <button onClick={() => kustuta (index)}>X</button> 
            </div>)}

            <label>Lisa nimi</label>
        <input ref={nimiL6ppuRef} type="text" />
        <button onClick ={lisaNimi}>Lisa nimi</button>
        <br /><br />

        <button onClick={tagasiOriginaali}>Tagasi originaali</button> <br />
        <button onClick={mT2hega}>Kuva kõik M-tähega</button>
        <button onClick={kuueKohalised}>Kuva kõik kuue kohalised</button>
        <button onClick={lõppebY}>Kuva kõik Y'ga lõppevad</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={etteEst}>Kirjuta ette Est</button> <br />


    </div>
  )
}

export default TagasisideAndjad