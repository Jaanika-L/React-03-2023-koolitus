import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Ostukorv() {
const [ostukorv, uuendaOstukorv] = useState (["Coca", "Fanta", "Sprite"]);

  return (
    <div>
      <div>Ostukorvis esemeid kokku : {ostukorv.length} tk </div>
      {ostukorv.map(toode => <div>{toode}</div> )}
        Ostukorv on tühi. <Link to="/"> Tooteid lisama. </Link>
    </div>
  )
}

export default Ostukorv