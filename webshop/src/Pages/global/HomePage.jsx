import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"
// import cartFile from "../../data/cart.json" -enam ei kasuta, nüüd kasutame localStoreaget
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import Carousel from 'react-bootstrap/Carousel';
import "../../css/HomePage.css";


//SALVESTUSE VARIANDID
// 1.Andmebaas - peame võtma väliseteenuse nt Amazon, Microsoft, Oracle
    // Andmebaas, seda näevad kõik. Tooted.Kategooriad.Poed
// 2.LocalStorage - Brauseris
    // - seda näen ainult mina. Ostukorv

function HomePage() {
  const [products, setProducts]=useState(productsFromFile)
  
  const addToCart = (clickedProduct) => {
      const cart =JSON.parse(localStorage.getItem("cart")) || []; //JSON.pars - localStorage nõuab
      
      const index =  cart.findIndex(element => element.product.id === clickedProduct.id);
      if (index >= 0) {
        // siis kui ostukorvis on juba see toode
        cart[index].quantity = cart[index].quantity +1;
      } else {
        //siis kui ostukorvis pole seda toodet
        cart.push({"product":clickedProduct, "quantity": 1});
      }
      
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Successfully added to cart!");
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

  const filterProductsByCategory =(categoryClicked) => {
    const filteredProducts = productsFromFile.filter(product => product.category === categoryClicked)
    setProducts(filteredProducts);
    
  }
  // 1. uus fail "data" kausta sisse
  // 2. cart.json -> sisse tühi array
  // 3. siin impordime ja lisame ühe toote sinna sisse

  // 4. Cart.jsx fail valmis teha sarnaselt eesti keelsega

  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img
          src="https://picsum.photos/id/237/500/200"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://picsum.photos/id/337/500/200"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://picsum.photos/id/437/500/200"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <Button onClick={SortAZ}>Sort A-Z</Button>
      <Button onClick={sortZA}>Sort Z-A</Button>
      <Button onClick={sortPriceAsc}>Sort price asc</Button>
      <Button onClick={sortPriceDesc}>Sort price desc</Button>
      <Button onClick={filterProductsByCategory}>Filter products by category</Button>


      <div>{products.length} tk </div>
     {/* <div className='content'> */}
     <div className='products'>
      {productsFromFile.map(product => 
     <div className='home-product' key={product.id}> 
          <Link to={"/product/" + product.id}> 
          {/* järjekord võib muutuda, ohtlik saata järjekorra numbrit urli */}
            <img src={product.image} alt="" />
            <div>{product.name}</div>
            <div>{product.price.toFixed(2)}</div>
          </Link>
        <Button variant="contained" onClick={() => addToCart(product)}>Lisa ostukorvi</Button>
      </div>
      )}
      </div>
      <div>
        <img  className='add' src="https://picsum.photos/100/400?grayscale" alt="" />
      {/* </div> */}
     </div>
      <ToastContainer
      position="bottom-right"
      theme="dark"
      />
    </div>
  )
}

export default HomePage