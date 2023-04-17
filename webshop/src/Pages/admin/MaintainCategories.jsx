import React, { useEffect ,useRef, useState } from 'react'
// "https://webshop-be51b-default-rtdb.europe-west1.firebasedatabase.app/"


function MaintainCategories() {
const [categories, setCategories]=useState([]);
const categoryRef=useRef();

useEffect(() => {
  fetch("https://webshop-be51b-default-rtdb.europe-west1.firebasedatabase.app/categories.json")
  .then(response => response.json())
  .then(json => setCategories(json || []));
}, []);

const addCategory = () => {
  categories.push({"name": categoryRef.current.value})
  setCategories(categories.slice())
  fetch("https://webshop-be51b-default-rtdb.europe-west1.firebasedatabase.app/categories.json", 
  {"method":"PUT", "body": JSON.stringify(categories)} 
  )
}
  
// const deleteCategory = () => {
//   // tehke kustutamine kodus ---> kustutaks visuaalis, niimoodi et refreshiga tuleb tagasi
// }
  return (
    <div>
      <label>Category</label>
      <input ref={categoryRef} type="text" />
      <button onClick={addCategory}>Add</button>
      {categories.map(element => <div>{element.name}</div>)}
    </div>
  )
}

export default MaintainCategories