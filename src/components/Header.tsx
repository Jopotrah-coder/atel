import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaInfoCircle, FaPhone, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-teal-800 shadow-lg text-white">
      <div className="container mx-auto px-4 py-3">
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <svg className="h-8 w-8 text-lime-500" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M56 20.57l-24-14.67-24 14.67v26.86h16v-12a4 4 0 014-4h8a4 4 0 014 4v12h16V20.57z" />
              <path d="M32 8a2 2 0 012 2v8h8v-4a2 2 0 014 0v8a2 2 0 01-2 2H20a2 2 0 01-2-2v-8a2 2 0 014 0v4h8v-8a2 2 0 012-2z" />
            </svg>
            <div className="ml-2">
              <span className="font-bold text-lg block leading-none">ОТЕЛЬ</span>
              <span className="text-xs text-lime-300">МАХАЧКАЛА</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center font-medium hover:text-lime-300">
              <FaBed className="mr-1" /> Номера
            </Link>
            <Link to="/about" className="flex items-center font-medium hover:text-lime-300">
              <FaInfoCircle className="mr-1" /> О нас
            </Link>
            <Link to="/services" className="flex items-center font-medium hover:text-lime-300">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Услуги
            </Link>
            <Link to="/contact" className="flex items-center font-medium hover:text-lime-300">
              <FaPhone className="mr-1" /> Контакты
            </Link>
            <Link 
              to="/booking" 
              className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-4 py-2 rounded-md flex items-center"
            >
              <FaCalendarAlt className="mr-2" />
              Забронировать
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none"
            aria-label="Меню"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-teal-700 px-4 py-3 shadow-inner">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="flex items-center py-2 px-3 hover:bg-teal-600 rounded-md">
              <FaBed className="mr-2" /> Номера
            </Link>
            <Link to="/about" className="flex items-center py-2 px-3 hover:bg-teal-600 rounded-md">
              <FaInfoCircle className="mr-2" /> О нас
            </Link>
            <Link to="/services" className="flex items-center py-2 px-3 hover:bg-teal-600 rounded-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Услуги
            </Link>
            <Link to="/contact" className="flex items-center py-2 px-3 hover:bg-teal-600 rounded-md">
              <FaPhone className="mr-2" /> Контакты
            </Link>
            <Link 
              to="/booking" 
              className="flex items-center bg-lime-600 hover:bg-lime-700 text-white font-semibold px-4 py-2 rounded-md mt-2"
            >
              <FaCalendarAlt className="mr-2" />
              Забронировать
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 