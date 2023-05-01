import React, { useEffect, useRef, useState } from 'react'

function ParcelMachine() {
    const [parcelMachines, setParcelMachines] = useState([]) //mida välja  näitan - 5, 2, 10, 500, 1255
    const [dbparcelMachines, setDbParcelMachines] = useState([]) // milleseest filterdan ---- aalati 1255
    const searchedRef = useRef();


    useEffect(() => {
        fetch("https://www.omniva.ee/locations.json")
            .then(response => response.json())
            .then(json => {
                setParcelMachines(json);
                setDbParcelMachines(json);
            })


    }, []);

    const searchFromParcelMachines = () => {
        const result = dbparcelMachines.filter(el =>
            el.NAME.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
        setParcelMachines(result);
    }

    return (
        <div>
            <input ref={searchedRef} onChange={searchFromParcelMachines} type="text" />

            <select className='parcelMachines' >
                {parcelMachines
                    .filter(el => el.A0_NAME === "EE")
                    .map(el => <option>{el.NAME}</option>)}

            </select>

        </div>
    )
}

export default ParcelMachine