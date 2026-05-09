import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  { id: 1, name: 'Apple', category: 'fruits', price: 5.99, emoji: '🍎' },
  { id: 2, name: 'Milk', category: 'dairy', price: 3.99, emoji: '🥛' },
  { id: 3, name: 'Cheese', category: 'dairy', price: 5.49, emoji: '🧀' },
  { id: 4, name: 'Yogurt', category: 'dairy', price: 4.29, emoji: '🥄' },
  { id: 5, name: 'Carrots', category: 'vegetables', price: 2.49, emoji: '🥕' },
  { id: 6, name: 'Broccoli', category: 'vegetables', price: 3.29, emoji: '🥦' },
  { id: 7, name: 'Tomatoes', category: 'vegetables', price: 4.99, emoji: '🍅' },
  { id: 8, name: 'Bananas', category: 'fruits', price: 2.99, emoji: '🍌' },
  { id: 9, name: 'Oranges', category: 'fruits', price: 4.49, emoji: '🍊' },
  { id: 10, name: 'Bread', category: 'bakery', price: 3.49, emoji: '🍞' },
  { id: 11, name: 'Croissant', category: 'bakery', price: 2.99, emoji: '🥐' },
  { id: 12, name: 'Chicken', category: 'meat', price: 8.99, emoji: '🍗' },
  { id: 13, name: 'Beef', category: 'meat', price: 12.99, emoji: '🥩' },
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
        <p className="no-products">No products available in this category.</p>
      )}
    </div>
  );
};

export default ProductList;