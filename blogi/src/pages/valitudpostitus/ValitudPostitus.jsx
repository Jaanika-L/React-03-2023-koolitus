import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ValitudPostitus() {
    const [valitudPostitused, uuendaValitudPostitused] = useState(
        JSON.parse(localStorage.getItem("valitudPostitused")) || []
    )

    const eemalda = (index) => {
        valitudPostitused.splice(index,1);
        uuendaValitudPostitused(valitudPostitused.slice())
        localStorage.setItem("valitudPostitused", JSON.stringify(valitudPostitused))
    }


  return (
    <div>
        {valitudPostitused.map((postitus, index)=>
            <div>
                <div>{postitus.pealkiri}</div>
                <div>{postitus.sisu}</div>
                <div>{postitus.aeg}</div>
                <button onClick={()=>eemalda(index)}>Eemalda</button>
                <Link to={"/muuda-postitust/" + index}>
                <button>Muuda</button>
                </Link>

            </div>
            )}
    </div>
  )
}

export default ValitudPostitus