import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  // toggle dark mode
  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  // add to cart
  function addToCart(product) {
    setCart(prevCart => [...prevCart, product]);
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      
      <h1>Shopping App</h1>

      <DarkModeToggle 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />

      {/* Category Filter */}
     <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Bakery">Bakery</option>
      </select>

      <ProductList 
        addToCart={addToCart} 
        category={category} 
      />

      <Cart cart={cart} />

    </div>
  );
}

export default App;