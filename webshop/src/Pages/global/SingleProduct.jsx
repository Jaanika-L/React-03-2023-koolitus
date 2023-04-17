import React from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"

// EI TOHI TEHA productsFromFile[id]
// product.id abil leiab alati õige

//PEAB TEGEMA productsFromFile.find (e=> e.id === Number(id))

function SingleProduct() {
  const { id } = useParams()


  const found = productsFromFile.find(element => element.id === Number(id));

  return (
    <div>
      {found !== undefined &&
        <div>
          <img src={found.image} alt="" />
          <div>{found.id}</div>
          <div>{found.name}</div>
          <div>{found.description}</div>
          <div>{found.category}</div>
        </div>}
      {found === undefined && <div>Product not found</div>}
    </div>
  )
}

export default SingleProduct