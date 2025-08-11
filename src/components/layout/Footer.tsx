import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Heart, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-elementos-4 dark:bg-primary-900 text-white">
      <div className="container-tight py-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link 
                          to="/" 
                          className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md"
                          aria-label="Adaptive Learning Platform - Home"
                        >
                          
                          <img src={`${import.meta.env.BASE_URL}images/capacit11y_white 1.png`}  alt="Capacit11y"></img>
                        </Link>
            <p className="text-primary-100 dark:text-primary-200">
              Haciendo el aprendizaje accesible para todos, en todas partes.
            </p>
          </div>

          <div className='mt-5'>
            <div className="text-base text-primary-100 font-bold dark:text-primary-200 transition-colors">Accesos rápidos</div>
            <ul className="space-y-0">
              <li>
                <Link to="/about" className="font-normal text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Cursos</Link>
              </li>
              <li>
                <Link to="/courses" className="font-normal text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Acerca</Link>
              </li>
              <li>
                <Link to="/resources" className="font-normal text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Soporte</Link>
              </li>
            </ul>
          </div>

          <div className='mt-5'>
            <div className="text-base text-primary-100 font-bold dark:text-primary-200 transition-colors">Accesibilidad</div>
            <ul className="space-y-0">
              <li>
                <Link to="/about" className="font-normal text-primary-100 dark:text-primary-200 hover:text-white transition-colors">WCAG Guidelines</Link>
              </li>
              <li>
                <Link to="/courses" className="font-normal text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Accessibility Statement</Link>
              </li>
              <li>
                <Link to="/resources" className="font-normal text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Informar un problema</Link>
              </li>
            </ul>
          </div>

          <div className='mt-5'>
            <div className="text-base text-primary-100 font-bold dark:text-primary-200 transition-colors">Contacto</div>
            <ul className="space-y-0">
              <li>
                <Link to="/about" className="font-normal text-primary-100 dark:text-primary-200 hover:text-white transition-colors">support@capacita11y.com</Link>
              </li>
              <li>
                <Link to="/courses" className="font-normal text-primary-100 dark:text-primary-200 hover:text-white transition-colors">1-800-ACCESS</Link>
              </li>
            </ul>
          </div>

        </div> 
      </div>
    </footer>
  );
};

export default Footer;