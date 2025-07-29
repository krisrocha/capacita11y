import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Heart, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 dark:bg-primary-900 text-white">
      <div className="container-tight py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Book className="h-8 w-8 text-white" />
              <span className="text-xl font-heading font-bold">Adaptive Learning</span>
            </Link>
            <p className="text-primary-100 dark:text-primary-200">
              An inclusive educational platform designed for students with disabilities, providing accessible learning experiences for all.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/resources" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Help Center</Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Accessibility Statement</Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-100 dark:text-primary-200 mr-2 mt-0.5" />
                <a href="mailto:support@adaptivelearning.edu" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">
                  support@adaptivelearning.edu
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-100 dark:text-primary-200 mr-2 mt-0.5" />
                <a href="tel:+15551234567" className="text-primary-100 dark:text-primary-200 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 dark:border-primary-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-100 dark:text-primary-200 text-sm">
              &copy; {new Date().getFullYear()} Adaptive Learning Platform. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="text-primary-100 dark:text-primary-200 text-sm flex items-center">
                Made with <Heart className="h-4 w-4 text-error-400 mx-1" aria-label="love" /> for inclusive education
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;