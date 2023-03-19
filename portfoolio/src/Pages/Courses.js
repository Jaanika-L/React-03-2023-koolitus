import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

function Courses() {
  return (
<div>
    <div>Courses</div>
    <div>Programmeerimisest maalähedaselt</div>
    <div>Javascript. React - Aurora Development OU</div>
    <div>
        <Link to='/'><button>Tagasi pealehele</button></Link>
        <div>Kursuste sisu</div>

    </div>
</div>
  )
}

export default Courses