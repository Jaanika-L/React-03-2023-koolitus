import React from 'react'

import Button from '@mui/material/Button';


function SortButtons(props) {
    const SortAZ =() => {
        props.products.sort((a,b) => a.name.localeCompare(b.name));
        props.setProducts(props.products.slice());
      }
    
      const sortZA = () => {
        props.products.sort((a,b) => b.name.localeCompare(a.name));
        props.setProducts(props.products.slice());
    
      }
      const sortPriceAsc = () => {
        props.products.sort((a,b) => a.price - b.price);
        props.setProducts(props.products.slice());
    
      }
      const sortPriceDesc = () =>{
        props.products.sort((a,b) => b.price - a.price);
        props.setProducts(props.products.slice());
      }

  return (
    <div>
     <Button onClick={SortAZ}>Sort A-Z</Button>
      <Button onClick={sortZA}>Sort Z-A</Button>
      <Button onClick={sortPriceAsc}>Sort price asc</Button>
      <Button onClick={sortPriceDesc}>Sort price desc</Button>
    </div>
  )
}

export default SortButtons