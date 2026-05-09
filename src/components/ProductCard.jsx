import React from 'react';

const ProductCard = ({ product, addToCart, darkMode }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={`product-card ${darkMode ? 'dark-mode-card' : 'light-mode-card'}`}>
      <div className="product-emoji">{product.emoji}</div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button 
        onClick={handleAddToCart} 
        className="add-to-cart-btn"
        data-testid={`product-${product.id}`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;