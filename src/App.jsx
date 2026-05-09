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
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
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
              <option value="Fruits">Fruits</option>
              <option value="Dairy">Dairy</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
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