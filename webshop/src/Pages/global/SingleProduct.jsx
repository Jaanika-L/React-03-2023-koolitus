import React from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"

// EI TOHI TEHA productsFromFile[no]
// product.id abil leiab alati õige

//PEAB TEGEMA productsFromFile.find (e=> e.id === Number(id))

function SingleProduct() {
  const{no}=useParams()

  const found = productsFromFile[no];

  return (
    <div>
      {found !== undefined &&<div>
        <div>Productname: {found.name}</div>
        <div>Product price: {found.price}</div>
        <div>Product number: {Number(no)+1}</div>
        <img src={found.image} alt="" />
        </div>}
        {found === undefined && <div>Product not found</div>}
    </div>
  )
}

export default SingleProduct