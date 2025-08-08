import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import Courses from './pages/Courses';

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cursos" element={<Courses/>} />
              {/* Futuras rutas */}
              {/* <Route path="/cursos" element={<Courses />} />
              <Route path="/acerca" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} /> */}
              {/* Ruta por defecto si no se encuentra otra */}
              <Route path="*" element={<div className="container-tight py-20 text-center"><h1>Página no encontrada</h1></div>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AccessibilityProvider>
  );
}

export default App;