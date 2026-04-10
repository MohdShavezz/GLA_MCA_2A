import React, { useEffect, useState } from 'react'

const ProductList = () => {

    const [products,setProducts]=useState([])

    async function getProducts() {
       const res= await fetch('http://localhost:3000/api/products')
       const prod= await res.json()
       setProducts(prod)
    }
    useEffect(()=>{
        getProducts()
    },[])
    // console.log(products)

  return (
     <div>
      <h2>Product List:</h2>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product,id) => (
          <div key={product._id} style={{display:'flex',gap:'1rem',alignItems:'center'}}>

            <h3>{id+1}</h3>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default ProductList
