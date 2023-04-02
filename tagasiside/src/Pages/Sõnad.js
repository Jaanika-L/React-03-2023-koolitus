import React, { useState } from 'react'

function Sõnad() {
  const [sõnad, määraSõnad] = useState(['shoes', 'shirts', 'socks', 'sweaters', 'pigs', 'goats', 'sheep', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'March', 'Jan', 'Feb', 'Dec'])

  const kustuta = (järjekorranumber) => {
    sõnad.splice (järjekorranumber,1);
    määraSõnad(sõnad.slice());
  }

  const tühjenda = () => {

  }

  const lisa = () => {
    sõnad.push ("chickens", "cats", "dogs");
    määraSõnad(sõnad.slice());

  }

  const tähestikuJärgi =() => {
    sõnad.sort()
    määraSõnad(sõnad.slice());
  } 
 
  const neliTähte = () => {
    const tulem = sõnad.filter (sõnad => sõnad.length > 4)
    määraSõnad(tulem);


  }
  return (
    <div>
      <div>Sõnu kokku: {sõnad.length} tk </div>
      {sõnad.map((el, index) => <div>{el} 
      <button onClick={()=>  kustuta(index)}>Kustuta</button> 
  
      </div>)}
      <br />
      <button onClick={tühjenda}>Tühjenda</button> 
      <button onClick={lisa}>Lisa kolm looma</button>
      <button onClick={tähestikuJärgi}>Sorteeri tähestiku järgi</button>
      <button onClick={neliTähte}>Rohkem kui neli tähte</button>
    </div>
  )
}

export default Sõnad