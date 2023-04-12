import React from 'react'
// import cartFile from "../../data/cart.json" //nüüd peame võtma localStoraget
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../css/Cart.css";
import Button from '@mui/material/Button';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  //ostukorvi fail välja kuvada:
  // üles useState
  // HTMLis .map()

  // const add = (clickedProduct) => {
  //   cart.push(clickedProduct);
  //   setCart(cart.slice());
  // }

  // ostukorvi tühjendada
  const emptyCart = () => {
    setCart([]); // uuendab HTMLi
    localStorage.setItem("cart", JSON.stringify([])); // uuendab LocalStoraget
  }

  const decreaseQuantity = (index) => {
    if (cart[index].quantity === 1) {
      return;

    }
    cart[index].quantity = cart[index].quantity - 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));

  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));

  }



  // võimaldage ostukorvist kustutada
  const removeFromCart = (jarjekorranumberEhkIndex) => {
    cart.splice(jarjekorranumberEhkIndex, 1);
    setCart(cart.slice()); //uuendab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); //uuendab LocalStoraget
  }



  // ostukori kogusummat arvutada
  const totalSum = () => {
    let sum = 0;
    cart.forEach(element => sum = sum + element.product.price * element.quantity);
    return sum.toFixed(2);
  }
  // dünaamika - kui in 0 ostukorvi kogus, siis ei näidata "tühjendat" ja "kogusummat"


  return (
    <div>
      {cart.length > 0 &&
        <div className='cart-top' >
          <Button variant="outlined" onClick={emptyCart} >Empty Cart</Button>

          <div>Total items : {cart.length} tk</div>
        </div>
      }
      {/* {cart.length > 0 && } */}
      {cart.map((element, index) =>
        <div className='product' key={index}>
          <img
            className='image' src={element.product.image} alt="" />
          <div className='name' >{element.product.name}</div>
          <div className='price' >{element.product.price.toFixed(2)}</div>
          <div className='quantity'>
            <img src="/minus.png" className={element.quantity === 1 ? "disabled" : 'button'} disabled={element.quantity === 1} onClick={() => decreaseQuantity(index)} alt="" />
            <div>{element.quantity}</div>
            <img src="/plus.png" className='button' onClick={() => increaseQuantity(index)} alt="" />
          </div>
          <div className='total'>{(element.product.price * element.quantity).toFixed(2)}</div>
          {/* <button onClick={() => add (product)} >+</button> */}
          <img src="/delete.png" className='button' onClick={() => removeFromCart(index)} alt="" />
        </div>
      )}
      {cart.length > 0 &&
        <div className='cart-bottom'>
          Total Amount: {totalSum()} €
        </div>
      }
      {cart.length === 0 &&
        <div className='center' >
          <br />
          Cart is empty  <Link to="/">Add more products</Link>
        </div>}


    </div>
  )
}

export default Cart