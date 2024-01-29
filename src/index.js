import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

// Import createRoot from react-dom/client
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);

// If you're using reportWebVitals, keep it as it is
reportWebVitals();
