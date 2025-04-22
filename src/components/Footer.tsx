import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контактная информация */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-secondary" />
                <span>ул. Ленина 1, Махачкала, Дагестан</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-secondary" />
                <a href="tel:+78722123456">+7 (8722) 12-34-56</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-secondary" />
                <a href="mailto:info@hotel-mahachkala.ru">info@hotel-mahachkala.ru</a>
              </li>
            </ul>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-secondary-light">О нас</Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-secondary-light">Номера</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary-light">Услуги</Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-secondary-light">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-secondary-light">Условия использования</Link>
              </li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-secondary-light"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-secondary-light"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-secondary-light"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Отель Махачкала. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 