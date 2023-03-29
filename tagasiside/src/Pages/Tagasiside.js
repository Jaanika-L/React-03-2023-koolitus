import { useRef, useState } from 'react'

function Tagasiside() {

    const [tagasiside, määraTagasiside] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"])
    const tagasisideRef = useRef();


function kustuta (index) {
    tagasiside.splice(index, 1);
    määraTagasiside(tagasiside.slice());
    }

const lisaUusTagasiside = () => {
    tagasiside.push(tagasisideRef.current.value)
    määraTagasiside(tagasiside.slice());

}

    return (

        <div>Tagasiside:
            {/* index on järjekorranumber, element on tagasiside */}
            {tagasiside.map((element, index) => 
             <div>
                <span>{element}</span>
                <button onClick={() => kustuta(index)}>X</button>
            </div>)}
            <br />
            <label>Lisa uus tagasiside:</label>
            <input ref={tagasisideRef} type='text'/>
            <button onClick={()=> lisaUusTagasiside()}>Sisesta</button>
        </div>
    )
}

export default Tagasiside