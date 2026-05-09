import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { products } from './components/ProductList';
import './index.css';

// Export products for testing
export { products as sampleProducts };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);