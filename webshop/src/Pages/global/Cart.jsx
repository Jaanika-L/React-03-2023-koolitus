// import cartFile from "../../data/cart.json" //nüüd peame võtma localStoraget
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../../css/Cart.module.css";
import Button from '@mui/material/Button';
import ParcelMachine from '../../components/cart/ParcelMachine';
import Payment from '../../components/cart/Payment';
import { CartSumContext } from '../../store/CartSumContext';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const { setCartSum } = useContext(CartSumContext);
  
  //SIIN OLI ENNE PARCELMACHINE.JSX!!!!!!! 


  // API endpoint   API otspunkt -reaalajast andmete võtmine


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
    setCartSum("0.00")
  }

  const decreaseQuantity = (index) => {
    if (cart[index].quantity === 1) {
      return;

    }
    cart[index].quantity = cart[index].quantity - 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(totalSum())

  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(totalSum())

  }



  // võimaldage ostukorvist kustutada
  const removeFromCart = (jarjekorranumberEhkIndex) => {
    cart.splice(jarjekorranumberEhkIndex, 1);
    setCart(cart.slice()); //uuendab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); //uuendab LocalStoraget
    setCartSum(totalSum())
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
        <div className={styles['cart-top']} >
          <Button variant="outlined" onClick={emptyCart} >Empty Cart</Button>

          <div>Total items : {cart.length} tk</div>
        </div>
      }
      {/* {cart.length > 0 && } */}
      {cart.map((element, index) =>
        <div className={styles['product-wrapper']} >
          <div className={styles.product} key={index}>
            <img
              className={styles.image} src={element.product.image} alt="" />
            <div className={styles.name} >{element.product.name}</div>
            <div className={styles.price} >{element.product.price.toFixed(2)}</div>
            <div className={styles.quantity}>
              <img src="/minus.png" className={element.quantity === 1 ? "disabled" : 'button'} disabled={element.quantity === 1} onClick={() => decreaseQuantity(index)} alt="" />
              <div>{element.quantity}</div>
              <img src="/plus.png" className={styles.button} onClick={() => increaseQuantity(index)} alt="" />
            </div>
            <div className={styles.total}>{(element.product.price * element.quantity).toFixed(2)}</div>
            {/* <button onClick={() => add (product)} >+</button> */}
            <img src="/delete.png" className={styles.button} onClick={() => removeFromCart(index)} alt="" />
          </div>
          <div className={styles['mobile-view']}>
            <img src="/minus.png" className={element.quantity === 1 ? "disabled" : 'button'} disabled={element.quantity === 1} onClick={() => decreaseQuantity(index)} alt="" />
            <div>{element.quantity}</div>
            <img src="/plus.png" className={styles.button} onClick={() => increaseQuantity(index)} alt="" />
          </div>
        </div>
      )}
      {cart.length > 0 &&
        <div className={styles['cart-bottom']}>
          <div className={styles.sum}>Total Amount: {totalSum()} €</div>

            <ParcelMachine/>

          <Payment sum={totalSum()} />

        </div>
      }
      {cart.length === 0 &&
        <div className={styles.center}>
          <br />
          Cart is empty  <Link to="/">Add more products</Link>
        </div>}


    </div>
  )
}

export default Cart