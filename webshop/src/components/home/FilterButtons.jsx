import React from 'react'
import Button from '@mui/material/Button';

function FilterButtons({dbProducts, setProducts, categories}) {
    const filterProductsByCategory = (categoryClicked) => {
        const filteredProducts = dbProducts.filter((product) => product.category === categoryClicked)
        setProducts(filteredProducts);

        // const filteredProducts = productsFromFile.filter((product) => product.category === categoryClicked)
        // setProducts(filteredProducts);  <--- enne andmebaasi panekut. 

    }

    return (
        <div>
            {categories.map(element =>
                <Button onClick={() => filterProductsByCategory(element.name)}>
                    {element.name}
                </Button>)}

            {/* <Button onClick={()=> filterProductsByCategory("motorcycle")}>Motorcycles</Button>
      <Button onClick={()=> filterProductsByCategory("motors")}>Motors</Button>
      <Button onClick={()=> filterProductsByCategory("robot vacuum")}>Robot vacuums</Button>
      <Button onClick={()=> filterProductsByCategory("stick vacuum")}>Stick vacuums</Button> */}
            {/* <div className='content'> */}
        </div>
    )
}

export default FilterButtons