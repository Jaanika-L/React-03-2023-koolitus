import { useState } from "react";



function Avaleht () {
    const [postitused, uuendaPostitused] = useState([]); // ([]) tähendab, et väärtus rakendub siis, kui pol  veel API pärngust vastust tulnud

    useEffect(() => {
        
    }, []);
    return ( 
    <div>See on avaleht, nähtav localhost:3000 aadressil
        <img className="delfi" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Delfi_logo.png" alt="Delfi logo" />
    </div>
    );
}

export default Avaleht ;