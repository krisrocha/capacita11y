import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Settings, User, LogOut, Book, Home } from 'lucide-react';
import AccessibilityPanel from '../accessibility/AccessibilityPanel';
import { useAccessibility } from '../../context/AccessibilityContext';

interface HeaderProps {
  isLoggedIn?: boolean;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  isLoggedIn = false, 
  userName = 'Guest' 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accessibilityPanelOpen, setAccessibilityPanelOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useAccessibility();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAccessibilityPanel = () => {
    setAccessibilityPanelOpen(!accessibilityPanelOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="container-tight">
        <div className="flex justify-between items-center py-4">
          {/* Logo and site title */}
          <div className="flex items-center space-x-2">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md"
              aria-label="Adaptive Learning Platform - Home"
            >
              <Book className="h-8 w-8" />
              <span className="text-xl font-heading font-bold hidden sm:inline">
                Adaptive Learning
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            <Link to="/support" className="nav-link">Support</Link>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleAccessibilityPanel}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Accessibility settings"
            >
              <Settings className="h-5 w-5" />
            </button>

            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {isLoggedIn ? (
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="User menu"
                >
                  <User className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-300">{userName}</span>
                </button>
                {/* User dropdown menu would go here */}
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login" className="btn btn-outline btn-sm">
                  Sign In
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm hidden sm:inline-flex">
                  Register
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 animate-fade-in">
          <div className="container-tight py-4 space-y-3">
            <Link to="/" className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
              <div className="flex items-center space-x-3">
                <Home className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                <span className="text-gray-700 dark:text-gray-300">Home</span>
              </div>
            </Link>
            <Link to="/courses" className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
              <div className="flex items-center space-x-3">
                <Book className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                <span className="text-gray-700 dark:text-gray-300">Courses</span>
              </div>
            </Link>
            <Link to="/resources" className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
              <div className="flex items-center space-x-3">
                <Book className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                <span className="text-gray-700 dark:text-gray-300">Resources</span>
              </div>
            </Link>
            <Link to="/support" className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
              <div className="flex items-center space-x-3">
                <Book className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                <span className="text-gray-700 dark:text-gray-300">Support</span>
              </div>
            </Link>
            {isLoggedIn && (
              <>
                <hr className="border-gray-100 dark:border-gray-800" />
                <Link to="/profile" className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300">Profile</span>
                  </div>
                </Link>
                <Link to="/logout" className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex items-center space-x-3">
                    <LogOut className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300">Sign Out</span>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      {/* Accessibility Panel */}
      {accessibilityPanelOpen && (
        <AccessibilityPanel onClose={toggleAccessibilityPanel} />
      )}
    </header>
  );
};

export default Header;