import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

export const products = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 5.99, emoji: '🍎' },
  { id: 2, name: 'Milk', category: 'Dairy', price: 3.99, emoji: '🥛' },
  { id: 3, name: 'Cheese', category: 'Dairy', price: 5.49, emoji: '🧀' },
  { id: 4, name: 'Yogurt', category: 'Dairy', price: 4.29, emoji: '🥄' },
  { id: 5, name: 'Carrots', category: 'Vegetables', price: 2.49, emoji: '🥕' },
  { id: 6, name: 'Broccoli', category: 'Vegetables', price: 3.29, emoji: '🥦' },
  { id: 7, name: 'Tomatoes', category: 'Vegetables', price: 4.99, emoji: '🍅' },
  { id: 8, name: 'Bananas', category: 'Fruits', price: 2.99, emoji: '🍌' },
  { id: 9, name: 'Oranges', category: 'Fruits', price: 4.49, emoji: '🍊' },
  { id: 10, name: 'Bread', category: 'Bakery', price: 3.49, emoji: '🍞' },
  { id: 11, name: 'Croissant', category: 'Bakery', price: 2.99, emoji: '🥐' },
  { id: 12, name: 'Chicken', category: 'Meat', price: 8.99, emoji: '🍗' },
  { id: 13, name: 'Beef', category: 'Meat', price: 12.99, emoji: '🥩' },
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
        <p className="no-products">No products available.</p>
      )}
    </div>
  );
};

export default ProductList;