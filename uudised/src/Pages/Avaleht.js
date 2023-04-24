import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Avaleht () {
    const [postitused, uuendaPostitused] = useState([]); // ([]) tähendab, et väärtus rakendub siis, kui pole  veel API pärngust vastust tulnud

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => uuendaPostitused(data))
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
        <Link to={"kasutaja-postitus/" + element.userId}>
            <button>Kõik kasutaja postitused</button>
        </Link>
        <Link to={"vaata-postitus/" + element.userId}>
            <button>Kõik kasutaja postitused</button>
        </Link>
    </div>
    )}
    </div>
    );
}

export default Avaleht ;