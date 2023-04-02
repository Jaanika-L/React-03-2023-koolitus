import { useState } from 'react'
import joogidFailist from "../joogid.json"

function HaldaJooke() {
  const [joogid, uuendaJoogid] = useState(joogidFailist);

  


  const kustuta = (index) => {
    joogidFailist.splice(index,1);
    uuendaJoogid(joogidFailist.slice());
  }

  
  
  return (
    <div>

      {joogid.map((el, index) => <div>{el} <button onClick={() => kustuta(index)}>X</button> </div>)}

      

    </div>
  )
}

export default HaldaJooke