import React, { useContext, useEffect, useState } from 'react'
// import productsFromFile from "../../data/products.json"
// import cartFile from "../../data/cart.json" -enam ei kasuta, nüüd kasutame localStoreaget
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import config from "../../data/config.json"
import { Spinner } from 'react-bootstrap';
import CarouselGallery from '../../components/home/CarouselGallery';
import SortButtons from '../../components/home/SortButtons';
import FilterButtons from '../../components/home/FilterButtons';
import styles from "../../css/HomePage.module.css"
import { CartSumContext } from '../../store/CartSumContext';


//SALVESTUSE VARIANDID
// 1.Andmebaas - peame võtma väliseteenuse nt Amazon, Microsoft, Oracle
// Andmebaas, seda näevad kõik. Tooted.Kategooriad.Poed
// 2.LocalStorage - Brauseris
// - seda näen ainult mina. Ostukorv

function HomePage() {
  const [products, setProducts] = useState([]) // kõikuv seisund
  const [dbProducts, setDbProducts] = useState([]) // ALATI 240 toodet
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { setCartSum } = useContext(CartSumContext);


  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []); // pane vähemalt tühi array, siis ei lähe errorisse
        setDbProducts(json || []);
        setLoading(false);
      }) // panime loogelised sulud, et teha mitu rida.

  }, []);

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => {
        setCategories(json || []); // pane vähemalt tühi array, siis ei lähe errorisse

      }) // panime loogelised sulud, et teha mitu rida.

  }, []);


  const addToCart = (clickedProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; //JSON.pars - localStorage nõuab

    const index = cart.findIndex(element => element.product.id === clickedProduct.id);
    if (index >= 0) {
      // siis kui ostukorvis on juba see toode
      cart[index].quantity = cart[index].quantity + 1;
    } else {
      //siis kui ostukorvis pole seda toodet
      cart.push({ "product": clickedProduct, "quantity": 1 });
    }
    let sum = 0;
    cart.forEach(element => sum = sum + element.product.price * element.quantity);
    setCartSum(sum.toFixed(2));
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Successfully added to cart!");
    // cartFile.push(clickedProduct); - oli enne
    //Lisage toast, sisuga: "Successfully added to cart"
  }



  
  // 1. uus fail "data" kausta sisse
  // 2. cart.json -> sisse tühi array
  // 3. siin impordime ja lisame ühe toote sinna sisse

  // 4. Cart.jsx fail valmis teha sarnaselt eesti keelsega

  if (isLoading === true) {
    return <div className='center'> <br /> <br /> <Spinner /></div>
  }
  return (
    <div>

      <CarouselGallery />
      <SortButtons
        products={products}
        setProducts={setProducts}
      />


      <div>{products.length} tk </div>
      <FilterButtons 
      dbProducts={dbProducts}
      setProducts={setProducts}
      categories={categories}
      />

      <div className={styles.products}>
        {products.map(product =>
          <div className= {styles.product} key={product.id}>
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
        <img className={styles.add} src="https://picsum.photos/100/400?grayscale" alt="" />
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