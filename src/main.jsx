import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { products } from './components/ProductList';
import './index.css';

// Make sampleProducts available globally for tests
window.sampleProducts = products;
// Also export for module systems
export const sampleProducts = products;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);