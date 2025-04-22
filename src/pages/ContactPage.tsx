import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero секция */}
      <div className="bg-teal-800 text-white py-12 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Контактная информация</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы и помочь с бронированием
          </p>
        </div>
      </div>

      {/* Контактная информация */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Контактные данные */}
          <div className="max-w-4xl mx-auto mb-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-teal-800">Свяжитесь с нами</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-teal-700 text-lime-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-teal-800">Адрес</h3>
                    <p className="text-gray-600">ул. Ленина 1, Махачкала, Республика Дагестан, 367000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-700 text-lime-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaPhone />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-teal-800">Телефон</h3>
                    <p className="text-gray-600">+7 (8722) 12-34-56</p>
                    <p className="text-gray-600">+7 (988) 123-45-67</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-teal-700 text-lime-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaEnvelope />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-teal-800">Email</h3>
                    <p className="text-gray-600">info@hotel-makhachkala.ru</p>
                    <p className="text-gray-600">booking@hotel-makhachkala.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-700 text-lime-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaClock />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-teal-800">Часы работы</h3>
                    <p className="text-gray-600">Регистрация: 24/7</p>
                    <p className="text-gray-600">Заезд: с 14:00</p>
                    <p className="text-gray-600">Выезд: до 12:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-teal-800 mb-3">Мы в социальных сетях</h3>
              <div className="flex space-x-3">
                <button className="bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <FaFacebookF />
                </button>
                <button className="bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <FaInstagram />
                </button>
                <button className="bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <FaTwitter />
                </button>
              </div>
            </div>
          </div>
          
          {/* Карта */}
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11674.908528282127!2d47.49384736971053!3d42.9766954212674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404ea0b3831f2907%3A0x2a0df7e61b54c3e8!2z0JzQsNGF0LDRh9C60LDQu9CwLCDQoNC10YHQvy4g0JTQsNCz0LXRgdGC0LDQvQ!5e0!3m2!1sru!2sru!4v1697021162747!5m2!1sru!2sru" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения отеля"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Форма обратной связи */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-teal-800">Напишите нам</h2>
              <div className="w-24 h-1 bg-lime-500 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Если у вас возникли вопросы или предложения, заполните форму ниже, и наши специалисты свяжутся с вами в ближайшее время
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-teal-700 text-white p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
                    <p className="mb-8 text-teal-100">
                      Мы готовы ответить на любые вопросы о нашем отеле, услугах и бронировании.
                    </p>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="text-lime-400 mr-3">
                        <FaPhone />
                      </div>
                      <a href="tel:+78722123456" className="hover:text-lime-400 transition-colors">+7 (8722) 12-34-56</a>
                    </li>
                    <li className="flex items-center">
                      <div className="text-lime-400 mr-3">
                        <FaEnvelope />
                      </div>
                      <a href="mailto:info@hotel-makhachkala.ru" className="hover:text-lime-400 transition-colors">info@hotel-makhachkala.ru</a>
                    </li>
                    <li className="flex items-start">
                      <div className="text-lime-400 mr-3 mt-1">
                        <FaMapMarkerAlt />
                      </div>
                      <span>ул. Ленина 1, Махачкала, Республика Дагестан</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h4 className="text-white font-semibold mb-3">Мы в социальных сетях</h4>
                    <div className="flex space-x-4">
                      <button className="bg-teal-800 hover:bg-teal-600 h-9 w-9 rounded-full flex items-center justify-center transition-colors">
                        <FaFacebookF />
                      </button>
                      <button className="bg-teal-800 hover:bg-teal-600 h-9 w-9 rounded-full flex items-center justify-center transition-colors">
                        <FaInstagram />
                      </button>
                      <button className="bg-teal-800 hover:bg-teal-600 h-9 w-9 rounded-full flex items-center justify-center transition-colors">
                        <FaTwitter />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 col-span-2">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Ваше имя <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition pl-10"
                            placeholder="Иван Иванов"
                            required
                          />
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition pl-10"
                            placeholder="example@mail.ru"
                            required
                          />
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Телефон</label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition pl-10"
                          placeholder="+7 (___) ___-__-__"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Тема <span className="text-red-500">*</span></label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                        required
                      >
                        <option value="">Выберите тему</option>
                        <option value="booking">Бронирование</option>
                        <option value="services">Услуги отеля</option>
                        <option value="feedback">Отзыв</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Сообщение <span className="text-red-500">*</span></label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                        placeholder="Ваше сообщение..."
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                        Я согласен с <Link to="/policy" className="text-teal-700 hover:text-teal-900">политикой конфиденциальности</Link>
                      </label>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
                      >
                        Отправить сообщение
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">Часто задаваемые вопросы</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Как добраться до отеля из аэропорта?</h3>
              <p className="text-gray-600">
                От аэропорта Махачкалы до нашего отеля можно добраться на такси за 25-30 минут. Мы также предлагаем услугу трансфера для наших гостей. Пожалуйста, свяжитесь с нами заранее, чтобы организовать встречу.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Есть ли парковка рядом с отелем?</h3>
              <p className="text-gray-600">
                Да, мы предлагаем бесплатную парковку для гостей отеля. Охраняемая парковка находится в непосредственной близости от здания отеля.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Предоставляет ли отель услуги прачечной?</h3>
              <p className="text-gray-600">
                Да, в нашем отеле есть услуги прачечной. Вы можете оставить свою одежду на ресепшене, и она будет возвращена вам чистой в течение 24 часов.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Есть ли в отеле ресторан?</h3>
              <p className="text-gray-600">
                Да, в нашем отеле есть ресторан, который предлагает разнообразные блюда дагестанской и европейской кухни. Ресторан работает с 7:00 до 23:00.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 