import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"

function EditProduct() {
const { id } = useParams(); //id tuleb app.js,"admin/edit-product/:id" 
const productFound = productsFromFile.find(oneProduct => oneProduct.id === Number(id));
// leiab alati kõige esimesna ja kuvab nt "nobe"

// const tulem = productsFromFile.filter(oneProduct => oneProduct.id === Number(id))[0];
// leiab kõik, kui on mitu ja kuvab arrayna nt ["nobe"][0]

const idRef=useRef();
  const nameRef=useRef();
  const priceRef=useRef();
  const imageRef = useRef();
  const categoryRef=useRef();
  const descriptionRef=useRef();
  const activeRef=useRef();
  const navigate = useNavigate();

  const edit = () => {
    const index = productsFromFile.findIndex(oneProduct => oneProduct.id === Number(id))
    
    const newProduct = {
        "id": Number(idRef.current.value),
        "name": nameRef.current.value,
        "price": Number(priceRef.current.value),
        "image": imageRef.current.value,
        "category": categoryRef.current.value,
        "description": descriptionRef.current.value,
        "active": activeRef.current.checked,
    }
    
    productsFromFile[index] = newProduct;
    navigate("/admin/maintain-products")
  }

    const [isIdUnique, setIdUnique] = useState(true);

  // Nii muutmised kui ka kustutamised käivad AINULT järjekorranumbri alusel

    const checkIdUniqueness = () => {
      // -1 productsFromFile.findIndex(product => product.id === idRef.current.value);
      //  undefined productsFromFile.find(product => product.id === idRef.current.value);
      // []productsFromFile.filter(product => product.id === idRef.current.value)[0];  
      // idRef.current.value
      const index =  productsFromFile.findIndex(product => product.id === Number(idRef.current.value));
      if (index === -1) {
        setIdUnique(true);
      } else {
        setIdUnique(false);

      }

    }
return (
    <div>
      {isIdUnique === false && <div>Entered ID is not unique!</div>}
        <label>ID</label> <br />
        <input ref={idRef} onChange={checkIdUniqueness} defaultValue={productFound.id} type="number" /> <br />
        <label>Name</label> <br />
        <input ref={nameRef} defaultValue={productFound.name} type="text" /> <br />
        <label>Price</label> <br />
        <input ref={priceRef} defaultValue={productFound.price} type="number" /> <br />
        <label>Image</label> <br />
        <input ref={imageRef} defaultValue={productFound.image} type="text" /> <br />
        <label>Category</label> <br />
        <input ref={categoryRef} defaultValue={productFound.category} type="text" /> <br />
        <label>Description</label> <br />
        <input ref={descriptionRef} defaultValue={productFound.description} type="text" /> <br />
        <label>Active</label> <br />
        <input ref={activeRef} defaultChecked={productFound.active} type="checkbox" /> <br />
        <button disabled={isIdUnique === false} onClick={edit}>Edit</button>
    </div>
  )
}

export default EditProduct