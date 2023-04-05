import React, { useState } from 'react';
import tegevusteFail from "../tegevused.json";

function Tegevused() {
    const [tegevused, uuendaTegevused]=useState(tegevusteFail);


    const n2itaKasutaja1 = () => {
        const vastus = tegevused.filter(element => element.userId === 1);
        uuendaTegevused(vastus);

    }

    const n2itaKasutaja2 = () => {

    }

    const n2itaKasutaja3 = () => {

    }
    const valmisTegevused = () => {

    }

    const mittevalmisTegevused = () => {

    }
    const algavadT = () => {

    }

    const rohkemKui20 = () => {

    }

    const tagasiOriginaali = () => {
        uuendaTegevused(tegevusteFail);
    }

  return (
    <div>
        <div>Näita kogu tegevuse arvu .length abil</div>
        <button onClick={n2itaKasutaja1}>Kuva kõik kasutaja ID 1 tegevused</button>
        <button onClick={n2itaKasutaja2}>Kuva kõik kasutaja ID 2 tegevused</button>
        <button onClick={n2itaKasutaja3}>Kuva kõik kasutaja ID 3 tegevused</button>
        <button onClick={valmisTegevused}>Kuva kõik valmis tegevused</button>
        <button onClick={mittevalmisTegevused}>Kuva kõik mittevalmistegevused</button>
        <button onClick={algavadT}>Kuva kõik 't' tähega algavad tegevused</button>
        <button onClick={rohkemKui20}>Kuva kõik tegevused, millel on tähemärke rohkem kui 20</button>
        <button onClick={tagasiOriginaali}>Kuva kõik tegevused tagasi</button>




    {tegevused.map(element => 
    <div>
         <div>{element.userId}</div>
         <div>{element.id}</div>
         <div>{element.title}</div>
         <div>{element.completed}</div>
         </div>)}
    </div>
  )
}

export default Tegevused