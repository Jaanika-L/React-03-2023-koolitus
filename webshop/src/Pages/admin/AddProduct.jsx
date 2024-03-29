
import React, { useEffect, useRef, useState } from 'react'
// import productsFromFile from "../../data/products.json"
import config from "../../data/config.json"

function AddProduct() {
  const [message, setMessage] = useState("Lisa toode!");
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [isIdUnique, setIdUnique] = useState(true);
  const [dbProducts, setDbProducts]=useState([]) 


  useEffect(() => {
    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json => {
      // {setProducts(json || []); 
      setDbProducts(json || []);
    }) 
    
  }, []);

  const add = () => {
    if (idRef.current.value === "") {
      setMessage("Id has empty value, cant add!")
      return;
    }

    if (nameRef.current.value === "") {
      setMessage("Name has empty value, cant add!")
      return;
    }

    if (priceRef.current.value === "") {
      setMessage("Price has empty value, cant add!")
      return;
    }

    // } else {
    setMessage("Product " + nameRef.current.value + " added!");
    dbProducts.push({
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked
    });
    // }
    // PUT  PÄRING ANDMEBAASI category puti järgi. Andmebaasi panemine, mitte võtmine. (Addproduct)
    fetch (config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)}) //put on andmebaasi panekuks, eesmärk sendida (postmanis)
  } // 

  const checkIdUniqueness = () => {

    const index = dbProducts.findIndex(product => product.id === Number(idRef.current.value));
    if (index === -1) {
      setIdUnique(true);
    } else {
      setIdUnique(false);

    }

  }

  


  return (
    <div>
      {isIdUnique === false && <div>Entered ID is not unique!</div>}
      <div>{message}</div>
      <label>Product id</label> <br />
      <input onChange={checkIdUniqueness} ref={idRef} type="number" /> <br />
      <label>Product name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Product price</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>Product image</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>Product category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <label>Product description</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>Product activness</label> <br />
      <input ref={activeRef} type="checkbox" /> <br />
      <button disabled={isIdUnique === false} onClick={add}>Add</button>

    </div>
  )
}

export default AddProduct