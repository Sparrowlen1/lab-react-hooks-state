import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter((_, index) => index !== itemId));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="app-header">
        <h1>🛒 Shopping App</h1>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      
      <div className="main-container">
        <div className="products-section">
          <div className="filter-container">
            <label htmlFor="category-filter">Filter by Category: </label>
            <select 
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              <option value="all">All Categories</option>
              <option value="dairy">Dairy</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
            </select>
          </div>
          
          <ProductList 
            selectedCategory={selectedCategory} 
            addToCart={addToCart}
            darkMode={darkMode}
          />
        </div>
        
        <div className="cart-section">
          <Cart cart={cart} removeFromCart={removeFromCart} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default App;