// import React, { useEffect, useState } from 'react'
// import config from "../../data/config.json"
// import { Link } from 'react-router-dom';
import Postitus from "../../components/postitus/Postitus"
import "./postitused.css"
function Postitused() {

//   const [postitused, muudaPostitused] = useState([]); //alati pannakse siia tühi array, kui oodatakse vastust

//   useEffect(() => {
//     fetch(config.postitusedDbUrl)
//       .then(res => res.json())
//       .then(json => muudaPostitused(json) || [])

//   }, []);


//   const [klikitudPostitus, uuendaKliklitudPostitus] = useState("");

//   const kuvaPostitus = (postitus) => {
//     uuendaKliklitudPostitus(postitus.pealkiri);
//   }

//   const valiPostitus = (valitudPostitus) => {
//     const valitud = JSON.parse(localStorage.getItem("valitudPostitused")) || [];
//     valitud.push(valitudPostitus)
//     localStorage.setItem("valitudPostitused", JSON.stringify(valitud));
//   }


//   const deletePostitus = (index) => {
//     postitused.splice(index, 1)
//     muudaPostitused(postitused.slice())
//     fetch(config.postitusedDbUrl,
//       { "method": "PUT", "body": JSON.stringify(postitused) }
//     )
//   }
  return (
<div className="postitused">
  <Postitus/>
</div>
//     <div  className='postitused'>
//       {klikitudPostitus !== "" && <div>Klikkisid postituse {klikitudPostitus}</div>}
//       {postitused.map((postitus, index) =>
//         <div>
//           {postitus.pilt &&
//             <img className='postituse-pilt' src={postitus.pilt} alt="Postituse pilt" />}
//           <div className='postituse-pealkiri'>{postitus.pealkiri}</div>
//           <hr />
//           <div className='postituse-sisu'>{postitus.sisu}</div>
//           <div className='postituse-aeg'>{postitus.aeg}</div>

//           <button className='nupp' onClick={() => deletePostitus(index)}>Kustuta</button><br />
//           <button className='nupp' onClick={() => valiPostitus(postitus)}>Vali</button><br />
//           <Link to={"/yks-postitus/" + index}>
//             <button className='nupp' onClick={() => kuvaPostitus(postitus)}>Kuva</button>
//           </Link>
//         </div>
//       )}
//     </div>
  )
 }


export default Postitused