import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"

function HomePage() {
  const [products, setProducts]=useState(productsFromFile)

  const SortAZ =() => {
    setProducts();
  }

  //sort ZA
  //sortPriceAsc
  //sortPriceDesc

  //const addToCart () => {}
  // 1. uus fail "data" kausta sisse
  // 2. cart.json -> sisse tühi array
  // 3. siin impordime ja lisame ühe toote sinna sisse

  // 4. Cart.jsx fail valmis teha sarnaselt eesti keelsega

  return (
    <div>
      <button onClick={SortAZ}>Sort A-Z</button>
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
        <button>Lisa ostukorvi</button>
      </div>
      )}
    </div>
  )
}

export default HomePage