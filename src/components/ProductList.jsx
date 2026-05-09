import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  { id: 1, name: 'Milk', category: 'dairy', price: 3.99},
  { id: 2, name: 'Cheese', category: 'dairy', price: 5.49 },
  { id: 3, name: 'Yogurt', category: 'dairy', price: 4.29},
  { id: 4, name: 'Carrots', category: 'vegetables', price: 2.49},
  { id: 5, name: 'Broccoli', category: 'vegetables', price: 3.29},
  { id: 6, name: 'Tomatoes', category: 'vegetables', price: 4.99},
  { id: 7, name: 'Apples', category: 'fruits', price: 5.99},
  { id: 8, name: 'Bananas', category: 'fruits', price: 2.9 },
  { id: 9, name: 'Oranges', category: 'fruits', price: 4.49},
  { id: 10, name: 'Bread', category: 'bakery', price: 3.49},
  { id: 11, name: 'Croissant', category: 'bakery', price: 2.99},
  { id: 12, name: 'Chicken', category: 'meat', price: 8.99},
  { id: 13, name: 'Beef', category: 'meat', price: 12.99},
];

const ProductList = ({ selectedCategory, addToCart, darkMode }) => {
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-list">
      <h2>🛍️ Products</h2>
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            addToCart={addToCart}
            darkMode={darkMode}
          />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="no-products">No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductList;