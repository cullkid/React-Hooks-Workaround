import React from 'react'
import Product from './Product'

// ProductList.js
export default function ProductList({ products, onAddToBasket }) {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToBasket={onAddToBasket} />
      ))}
    </div>
  );
}


