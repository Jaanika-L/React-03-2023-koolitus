import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"
// import cartFile from "../../data/cart.json" -enam ei kasuta, nüüd kasutame localStoreaget
import { Link } from 'react-router-dom'

//SALVESTUSE VARIANDID
// 1.Andmebaas - peame võtma väliseteenuse nt Amazon, Microsoft, Oracle
    // Andmebaas, seda näevad kõik. Tooted.Kategooriad.Poed
// 2.LocalStorage - Brauseris
    // - seda näen ainult mina. Ostukorv

function HomePage() {
  const [products, setProducts]=useState(productsFromFile)
  
  const addToCart = (clickedProduct) => {
      const cart =JSON.parse(localStorage.getItem("cart")) || []; //JSON.pars - localStorage nõuab
      cart.push(clickedProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
  // cartFile.push(clickedProduct); - oli enne
  //Lisage toast, sisuga: "Successfully added to cart"
  }
  
  const SortAZ =() => {
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(products.slice());

  }
  const sortPriceAsc = () => {
    products.sort((a,b) => a.price - b.price);
    setProducts(products.slice());

  }
  const sortPriceDesc = () =>{
    products.sort((a,b) => b.price - a.price);
    setProducts(products.slice());
  }

  

  
  // 1. uus fail "data" kausta sisse
  // 2. cart.json -> sisse tühi array
  // 3. siin impordime ja lisame ühe toote sinna sisse

  // 4. Cart.jsx fail valmis teha sarnaselt eesti keelsega

  return (
    <div>
      <button onClick={SortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAsc}>Sort price asc</button>
      <button onClick={sortPriceDesc}>Sort price desc</button>
      <div>{products.length} tk </div>
      {productsFromFile.map(product => 
     <div key={product.id}> 
          <Link to={"/product/" + product.id}> 
          {/* järjekord võib muutuda, ohtlik saata järjekorra numbrit urli */}
            <img src={product.image} alt="" />
            <div>{product.name}</div>
            <div>{product.price}</div>
          </Link>
        <button onClick={() => addToCart(product)}>Lisa ostukorvi</button>
      </div>
      )}
    </div>
  )
}

export default HomePage