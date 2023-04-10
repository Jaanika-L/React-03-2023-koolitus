import React from 'react'
// import cartFile from "../../data/cart.json" //nüüd peame võtma localStoraget
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [] );

//ostukorvi fail välja kuvada:
// üles useState
// HTMLis .map()

const add = (clickedProduct) => {
  cart.push(clickedProduct);
  setCart(cart.slice());
}

// ostukorvi tühjendada
const empty = () => {
setCart([]); // uuendab HTMLi
localStorage.setItem("cart", JSON.stringify([])); // uuendab LocalStoraget
}

// võimaldage ostukorvist kustutada
const removeFromCart = (jarjekorranumberEhkIndex) =>{
  cart.splice(jarjekorranumberEhkIndex, 1);
  setCart(cart.slice()); //uuendab HTMLi
  localStorage.setItem("cart", JSON.stringify(cart)); //uuendab LocalStoraget
}



// ostukori kogusummat arvutada
const totalAmount = () => {
  let amount = 0;
  cart.forEach(product => amount = amount + product.price);
  return amount;
}
// dünaamika - kui in 0 ostukorvi kogus, siis ei näidata "tühjendat" ja "kogusummat"


  return (
    <div>
      { cart.length > 0 && <button onClick={empty}>Empty Cart</button> }
      { cart.length > 0 && <div>Total items : {cart.length} tk</div> }
      {cart.map ((product, no) => 
      <div key = {no}>
        <img src={product.image} alt="" />
        {product.name}
        {product.price}
        <button onClick={() => add (product)} >+</button>
         <button onClick={() => removeFromCart (no)}>-</button> 
        </div>
        )}

      { cart.length === 0 && <div>Cart is empty  <Link to="/">Add more products</Link></div>}
        <div> Total Amount: {totalAmount()} € </div>

    </div>
  )
}

export default Cart