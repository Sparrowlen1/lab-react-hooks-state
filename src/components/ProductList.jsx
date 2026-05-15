import React from 'react'
import ProductCard from './ProductCard'

// Sample product data
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Banana', price: '$1.20', category: 'Fruits', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.00', category: 'Dairy', inStock: true }
]

const ProductList = ({ category, addToCart }) => {
  // filter logic
  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === category
        )

  return (
    <div>
      <h2>Available Products</h2>

      {/* Handle empty state */}
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  )
}

export default ProductList