import React, { useState } from 'react'

function Avaleht() {



	// const tegelased = [

	// 	{eesnimi: "Mickey", perekonnanimi: "Mouse", elukoht: "Disneyland", vanus:"25"},
	// 	{eesnimi: "Minnie", perekonnanimi: "Mouse", elukoht: "Disneyland", vanus:"25"},
	// 	{eesnimi: "Winnie", perekonnanimi: "Pooh", elukoht: "Hundred Acre Wood", vanus:"20"},
	// 	{eesnimi: "Roo", perekonnanimi: "Kangaroo", elukoht: "Hundred Acre Wood", vanus:"9"},
	// 	{eesnimi: "Scooby", perekonnanimi: "Doo", elukoht: "Crystal Cove", vanus:"7"}
	// ];
	const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
	const [klikitudNimi, uuendaKlikitudNimi] = useState("");


	const kuvaNimi = (tegelane) => {
		// console.log(tegelane.eesnimi)
		uuendaKlikitudNimi(tegelane.eesnimi);
	}

		/*Tee nii, et iga tegelast on võimalik „valida“ nupu kaudu, 
		lisades ta localStoragesse arrayna. Iga klikiga lisad selle 
		tegelase juurde (ostukorvi loogika). Kontrolli kas tegelased
		ilmuvad brauseri Local Storage-sse array’na.*/
	const valiTegelane = (klikitudTegelane) => {
		const valitud = JSON.parse (localStorage.getItem("valitudTegelased")) || []
		valitud.push(klikitudTegelane);
		localStorage.setItem("valitudTegelased", JSON.stringify(valitud));

	}

  return (
	
<div>
	{ klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi} peal</div>}
	 {tegelased.map(tegelane=> 
	 <div>
	 	<div>{tegelane.eesnimi}</div>
	 	<div>{tegelane.perekonnanimi}</div>
	 	<div>{tegelane.elukoht}</div>
		<div>{tegelane.vanus}</div>
		<button onClick={()=>valiTegelane(tegelane)}>Vali</button>
		<button onClick={()=> kuvaNimi(tegelane)}>Kuva nimi</button>
	 </div>)}
</div>   

 
 
 
    )





}

export default Avaleht