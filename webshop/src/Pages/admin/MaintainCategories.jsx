import React, { useEffect ,useRef, useState } from 'react'
import config from "../../data/config.json"

function MaintainCategories() {
const [categories, setCategories]=useState([]);
const categoryRef=useRef();

useEffect(() => {
  fetch(config.categoriesdbUrl)
  .then(response => response.json())
  .then(json => setCategories(json || []));
}, []);

const addCategory = () => {
  categories.push({"name": categoryRef.current.value})
  setCategories(categories.slice())
  fetch(config.categoriesdbUrl, 
  {"method":"PUT", "body": JSON.stringify(categories)} 
  )
}
  
const deleteCategory = (index) => {
  categories.splice(index, 1);
  setCategories(categories.slice());
  //Andmebaasist kustutamine
  fetch(config.categoriesdbUrl, 
  {"method":"PUT", "body": JSON.stringify(categories)} 
  )

}
  return (
    <div>
      <label>Category</label>
      <input ref={categoryRef} type="text" />
      <button onClick={addCategory}>Add</button>
      {categories.map((element, index) => <div>{element.name}
      <button onClick={()=>deleteCategory(index)}>x</button>
      </div>
      )}
            

    </div>
  )
}

export default MaintainCategories