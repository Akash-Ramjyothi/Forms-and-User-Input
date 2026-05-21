import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

import './index.css';

/**
 * Root container initialization
 * Ensures the application mounts safely
 * and enables React Strict Mode checks
 */
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root container element not found');
}

/**
 * Create React application root
 */
const root = ReactDOM.createRoot(rootElement);

/**
 * Render the application
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
