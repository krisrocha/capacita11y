import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, LogOut } from 'lucide-react';
import AccessibilityPanel from '../accessibility/AccessibilityPanel';
import { useAccessibility } from '../../context/AccessibilityContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accessibilityPanelOpen, setAccessibilityPanelOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useAccessibility();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen((s) => !s);
  const toggleAccessibilityPanel = () => setAccessibilityPanelOpen((s) => !s);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <a href="#main" className="skip-link">Skip to main content</a>

      <div className="container-tight">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md"
              aria-label="CapacitA11y - Inicio"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/capacit11y.png`}
                alt="CapacitA11y"
                className="h-10 w-auto dark:brightness-[200] dark:saturate-0"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Navegación de escritorio */}
          {!user ? (
            // Menú público
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink to="/"        className={({isActive}) => `nav-link ${isActive ? 'font-semibold text-sky-700' : ''}`}>Inicio</NavLink>
              <NavLink to="/cursos"  className={({isActive}) => `nav-link ${isActive ? 'font-semibold text-sky-700' : ''}`}>Cursos</NavLink>
              <NavLink to="/acerca"  className={({isActive}) => `nav-link ${isActive ? 'font-semibold text-sky-700' : ''}`}>Acerca de</NavLink>
              <NavLink to="/contacto"className={({isActive}) => `nav-link ${isActive ? 'font-semibold text-sky-700' : ''}`}>Contacto</NavLink>
            </nav>
          ) : (
            // Menú interno
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink to="/dashboard"  className={({isActive}) => `nav-link ${isActive ? 'font-semibold text-sky-700' : ''}`}>Dashboard</NavLink>
              <NavLink to="/mis-cursos" className={({isActive}) => `nav-link ${isActive ? 'font-semibold text-sky-700' : ''}`}>Mis cursos</NavLink>
              <NavLink to="/comunidad"  className={({isActive}) => `nav-link ${isActive ? 'font-semibold text-sky-700' : ''}`}>Comunidad</NavLink>
              <NavLink to="/perfil"     className={({isActive}) => `nav-link ${isActive ? 'font-semibold text-sky-700' : ''}`}>Perfil</NavLink>
            </nav>
          )}

          {/* Acciones */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleAccessibilityPanel}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Opciones de accesibilidad"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/accessibility-tools.png`}
                alt="Herramientas de accesibilidad"
                className="h-5 w-5 dark:brightness-[200]"
                loading="lazy"
              />
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={darkMode ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {!user ? (
              <div className="flex space-x-2">
                <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
                <Link to="/registro" className="btn btn-primary btn-sm hidden sm:inline-flex  dark:text-primary-900">Registro</Link>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/dashboard" className="btn btn-outline btn-sm">Dashboard</Link>
                <button
                  onClick={() => { logout(); navigate('/'); }}
                  className="btn btn-primary btn-sm inline-flex items-center gap-1"
                >
                  <LogOut className="h-4 w-4" /> Salir
                </button>
              </div>
            )}

            {/* Botón menú móvil */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-top border-gray-100 dark:border-gray-800 animate-fade-in">
          <div className="container-tight py-4 space-y-3">
            {!user ? (
              <>
                <NavLink to="/"         onClick={()=>setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">Inicio</NavLink>
                <NavLink to="/cursos"   onClick={()=>setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">Cursos</NavLink>
                <NavLink to="/acerca"   onClick={()=>setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">Acerca de</NavLink>
                <NavLink to="/contacto" onClick={()=>setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">Contacto</NavLink>
                <NavLink to="/login"    onClick={()=>setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">Login</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/dashboard"  onClick={()=>setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">Dashboard</NavLink>
                <NavLink to="/mis-cursos" onClick={()=>setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">Mis cursos</NavLink>
                <NavLink to="/comunidad"  onClick={()=>setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">Comunidad</NavLink>
                <NavLink to="/perfil"     onClick={()=>setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">Perfil</NavLink>
                <button
                  onClick={() => { logout(); setMobileMenuOpen(false); navigate('/'); }}
                  className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Salir
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Panel de accesibilidad */}
      {accessibilityPanelOpen && <AccessibilityPanel onClose={toggleAccessibilityPanel} />}
    </header>
  );
};

export default Header;
