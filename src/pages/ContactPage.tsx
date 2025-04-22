import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Карта */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11674.908528282127!2d47.49384736971053!3d42.9766954212674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404ea0b3831f2907%3A0x2a0df7e61b54c3e8!2z0JzQsNGF0LDRh9C60LDQu9CwLCDQoNC10YHQvy4g0JTQsNCz0LXRgdGC0LDQvQ!5e0!3m2!1sru!2sru!4v1697021162747!5m2!1sru!2sru" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта расположения отеля"
              ></iframe>
            </div>
            
            {/* Контактные данные */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-teal-800">Свяжитесь с нами</h2>
              
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
              
              <div className="mt-8">
                <h3 className="font-semibold text-teal-800 mb-3">Мы в социальных сетях</h3>
                <div className="flex space-x-3">
                  <a href="#" className="bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-teal-600 transition-colors">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-teal-600 transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" className="bg-teal-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-teal-600 transition-colors">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Форма обратной связи */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-teal-800">Напишите нам</h2>
            
            <form className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                    placeholder="Ваш email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Тема</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                  placeholder="Тема сообщения"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Сообщение</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                  placeholder="Ваше сообщение"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
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