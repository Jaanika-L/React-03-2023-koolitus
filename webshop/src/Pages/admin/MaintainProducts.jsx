import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"
import { Link } from 'react-router-dom';

function MaintainProducts() {
const [products, setProducts]=useState(productsFromFile)

const deleteProduct = () =>
//testige
//refreshiga tuleb tagasi
  setProducts();
  
return (
  <div>
 
  <div>{products.length} tk </div>
  {productsFromFile.map(product => 
 <div key={product.id}> 
 <img src={product.image} alt="" />
    <div>{product.id}</div>
    <div>{product.name}</div>
    <div>{product.price}</div>
    <div>{product.image}</div>
    <div>{product.category}</div>
    <div>{product.description}</div>
    <div>{product.actiove}</div>
    <div>{product.id}</div>
    <button onClick={deleteProduct}>Kustuta</button>
    <Link to={"/admin/edit-product/" + product.id }>
      <button>Muuda</button>
    </Link>
  </div>
  )}
</div>
  )
}

export default MaintainProducts