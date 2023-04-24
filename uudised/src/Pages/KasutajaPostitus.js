import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

function KasutajaPostitus() {
const { kasutajaId } = useParams();
const [postitused, uuendaPostitused] = useState([]); // ([]) tähendab, et väärtus rakendub siis, kui pol  veel API pärngust vastust tulnud

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => uuendaPostitused(data.filter(element => element.userId === Number(kasutajaId))))
}, []);
return ( 
<div>See on avaleht, nähtav localhost:3000 aadressil
    <img className="delfi" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Delfi_logo.png" alt="Delfi logo" />
{ postitused.map(element => 
<div>
    <div><i>{element.userId}</i></div> 
    {/* <i> on italic */}
    <div><u>{element.id}</u></div>
    {/* <u> on underline */}
    <div><b>{element.title}</b></div>
    {/* <b> on bold */}
    <div>{element.body}</div>
    
</div>
)}
</div>
);

  
}

export default KasutajaPostitus