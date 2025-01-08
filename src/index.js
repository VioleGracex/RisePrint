import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ProductList from './Pages/Product-list';
import PolygraphyCalculator from './Pages/PolygraphyCalculator';
import HomePage from './Pages/HomePage';
import { NavBar } from './components/NavBar'; // Import NavBar
import ProductPage from './Pages/ProductPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  {/* Wrap everything in Router */}
      <NavBar />  {/* Place NavBar inside Router */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PolygraphyCalculator" element={<PolygraphyCalculator />} />
        <Route path="/catalog" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductPage />} /> {/* Corrected route for product details page */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
