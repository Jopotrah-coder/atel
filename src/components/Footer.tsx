import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTelegram, FaClock, FaCreditCard, FaKey, FaTripadvisor, FaWifi } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-teal-800 to-teal-900 text-white">
      {/* Верхняя секция футера - контактная форма */}
      <div className="bg-teal-700 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Остались вопросы?</h3>
              <p className="text-teal-100">Свяжитесь с нами для получения дополнительной информации</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="tel:+78722123456" 
                className="bg-white text-teal-800 hover:bg-lime-400 px-6 py-3 rounded-lg font-bold transition-colors flex items-center"
              >
                <FaPhone className="mr-2" /> Позвонить
              </a>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-800 px-6 py-3 rounded-lg font-bold transition-colors"
              >
                Написать нам
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Основная часть футера */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Логотип и о компании */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white">Отель<span className="text-lime-400">Махачкала</span></h2>
              </div>
              <p className="text-gray-300 mb-6">
                Отель Махачкала — это комфорт и гостеприимство в самом сердце города. Мы стремимся создать для наших гостей атмосферу уюта и заботы.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-teal-700 hover:bg-teal-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-teal-700 hover:bg-teal-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://t.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-teal-700 hover:bg-teal-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Telegram"
                >
                  <FaTelegram />
                </a>
                <a 
                  href="https://tripadvisor.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-teal-700 hover:bg-teal-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="TripAdvisor"
                >
                  <FaTripadvisor />
                </a>
              </div>
            </div>
            
            {/* Контактная информация */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white relative pl-4 border-l-4 border-lime-400">
                Контактная информация
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="text-lime-400 mt-1 mr-3">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="block text-gray-300">Адрес:</span>
                    <address className="not-italic">ул. Ленина 1, Махачкала, Республика Дагестан, 367000</address>
                  </div>
                </li>
                <li className="flex">
                  <div className="text-lime-400 mt-1 mr-3">
                    <FaPhone />
                  </div>
                  <div>
                    <span className="block text-gray-300">Телефон:</span>
                    <a href="tel:+78722123456" className="hover:text-lime-400 transition-colors">+7 (8722) 12-34-56</a>
                  </div>
                </li>
                <li className="flex">
                  <div className="text-lime-400 mt-1 mr-3">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="block text-gray-300">Email:</span>
                    <a href="mailto:info@hotel-mahachkala.ru" className="hover:text-lime-400 transition-colors">info@hotel-mahachkala.ru</a>
                  </div>
                </li>
                <li className="flex">
                  <div className="text-lime-400 mt-1 mr-3">
                    <FaClock />
                  </div>
                  <div>
                    <span className="block text-gray-300">Часы работы:</span>
                    <span>Регистрация: 24/7</span>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Быстрые ссылки */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white relative pl-4 border-l-4 border-lime-400">
                Навигация по сайту
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="hover:text-lime-400 transition-colors flex items-center">
                      <span className="text-xs mr-2">&#9654;</span> Главная
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-lime-400 transition-colors flex items-center">
                      <span className="text-xs mr-2">&#9654;</span> О нас
                    </Link>
                  </li>
                  <li>
                    <Link to="/rooms" className="hover:text-lime-400 transition-colors flex items-center">
                      <span className="text-xs mr-2">&#9654;</span> Номера
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="hover:text-lime-400 transition-colors flex items-center">
                      <span className="text-xs mr-2">&#9654;</span> Услуги
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <Link to="/booking" className="hover:text-lime-400 transition-colors flex items-center">
                      <span className="text-xs mr-2">&#9654;</span> Бронирование
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-lime-400 transition-colors flex items-center">
                      <span className="text-xs mr-2">&#9654;</span> Контакты
                    </Link>
                  </li>
                  <li>
                    <Link to="/policy" className="hover:text-lime-400 transition-colors flex items-center">
                      <span className="text-xs mr-2">&#9654;</span> Политика
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="hover:text-lime-400 transition-colors flex items-center">
                      <span className="text-xs mr-2">&#9654;</span> Условия
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Информация о отеле */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white relative pl-4 border-l-4 border-lime-400">
                Услуги отеля
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaWifi className="text-lime-400 mr-2" />
                  <span>Бесплатный Wi-Fi</span>
                </li>
                <li className="flex items-center">
                  <FaClock className="text-lime-400 mr-2" />
                  <span>Круглосуточная стойка регистрации</span>
                </li>
                <li className="flex items-center">
                  <FaCreditCard className="text-lime-400 mr-2" />
                  <span>Оплата картой</span>
                </li>
                <li className="flex items-center">
                  <FaKey className="text-lime-400 mr-2" />
                  <span>Сейф в номере</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  to="/services"
                  className="text-white border-b border-dashed border-lime-400 hover:text-lime-400 transition-colors"
                >
                  Посмотреть все услуги
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Нижняя часть футера */}
      <div className="py-6 bg-teal-900 border-t border-teal-800/60">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Отель Махачкала. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <Link to="/policy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 