import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AccessibilityProvider } from './context/AccessibilityContext';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import Courses from './pages/Courses';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


//Páginas internas
import MyCoursesPage from './pages/MyCoursesPage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/ProfilePage';
import CourseLessonPage from './pages/CourseLessonPage';



function App() {
  return (
    <AccessibilityProvider>
      <AuthProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
              <Routes>
               {/* Públicas */}
                <Route path="/" element={<HomePage />} />
                <Route path="/cursos" element={<Courses />} />
                <Route path="/acerca" element={<AboutPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Privadas */}
                <Route element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/mis-cursos" element={<MyCoursesPage />} />
                  <Route path="/mis-cursos/:courseId/:chapterId" element={<CourseLessonPage />} />
                  <Route path="/comunidad" element={<CommunityPage />} />
                  <Route path="/perfil" element={<ProfilePage />} />
                </Route>

                {/* 404 */}
                <Route
                  path="*"
                  element={
                    <div className="container-tight py-20 text-center">
                      <h1>Página no encontrada</h1>
                    </div>
                  }
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </AccessibilityProvider>
  );
}

export default App;
