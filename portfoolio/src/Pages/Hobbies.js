import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

function Hobbies() {
  return (
<div>
    <div>Hobbies</div>
    <div>Maalimine</div>
    <div>Õmblemine</div>
    <div>Programmeerimine</div>
    <div>Treeningud</div>
    <div>
        <Link to='/'><button>Tagasi pealehele</button></Link>
        <div>Hobide sisu</div>

    </div>
</div>
  )
}

export default Hobbies