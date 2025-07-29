import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Other routes will be added as components are developed */}
              <Route path="*" element={<div className="container-tight py-20 text-center"><h1>Page Not Found</h1></div>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AccessibilityProvider>
  );
}
// Comentario de prueba para commit de evidencia
export default App;