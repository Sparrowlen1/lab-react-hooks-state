import React from 'react';

const Cart = ({ cart, removeFromCart, darkMode }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`cart ${darkMode ? 'dark-mode-cart' : 'light-mode-cart'}`}>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty. Add some items!</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
                <button 
                  onClick={() => removeFromCart(index)} 
                  className="remove-item-btn"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-total">
              <strong>Total:</strong> ${total.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;