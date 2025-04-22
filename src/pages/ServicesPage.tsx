import React from 'react';
import { FaWifi, FaUtensils, FaBriefcase, FaSwimmer, FaSpa, FaConciergeBell, FaShuttleVan, FaParking, FaPhone } from 'react-icons/fa';

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Hero секция */}
      <div className="bg-teal-800 text-white py-12 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Мы предлагаем широкий спектр услуг для комфортного отдыха и продуктивной работы
          </p>
        </div>
      </div>

      {/* Основные услуги */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
            Основные услуги
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Услуга 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-700 text-lime-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <FaWifi className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teal-800">Бесплатный Wi-Fi</h3>
              <p className="text-gray-600 text-center">
                Высокоскоростной интернет во всех номерах и общественных зонах отеля для работы и развлечений.
              </p>
            </div>
            
            {/* Услуга 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-700 text-lime-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <FaUtensils className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teal-800">Ресторан</h3>
              <p className="text-gray-600 text-center">
                Ресторан с разнообразным меню и блюдами дагестанской и европейской кухни. Завтрак включен.
              </p>
            </div>
            
            {/* Услуга 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-700 text-lime-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <FaParking className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teal-800">Парковка</h3>
              <p className="text-gray-600 text-center">
                Охраняемая парковка на территории отеля для гостей с собственным транспортом.
              </p>
            </div>
            
            {/* Услуга 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-700 text-lime-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <FaConciergeBell className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-teal-800">Консьерж-сервис</h3>
              <p className="text-gray-600 text-center">
                Помощь в организации экскурсий, заказе билетов, бронировании ресторанов и решении других вопросов.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Премиум услуги */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
            Премиум услуги
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Спа-центр" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center mb-3">
                  <FaSpa className="text-teal-700 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-teal-800">Спа-центр</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Наш спа-центр предлагает различные виды массажа, косметические процедуры, сауну и хаммам для полного расслабления и восстановления.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Профессиональные массажисты и косметологи
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Широкий выбор процедур для лица и тела
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Современное оборудование и натуральная косметика
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1600965962361-9035a2841ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Бассейн" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center mb-3">
                  <FaSwimmer className="text-teal-700 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-teal-800">Бассейн</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Крытый бассейн с подогревом доступен для гостей отеля в любое время года. Здесь вы можете расслабиться и насладиться плаванием.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Просторный бассейн с контролем температуры
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Зона отдыха с лежаками и полотенцами
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Профессиональные инструкторы (по запросу)
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Конференц-зал" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center mb-3">
                  <FaBriefcase className="text-teal-700 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-teal-800">Конференц-залы</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Современные конференц-залы для проведения деловых встреч, семинаров и презентаций, оснащенные всем необходимым оборудованием.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Залы разной вместимости (от 10 до 100 человек)
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Современное аудио и видео оборудование
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Кейтеринг и организация кофе-брейков
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1580255428045-5e93575f6b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Трансфер" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center mb-3">
                  <FaShuttleVan className="text-teal-700 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-teal-800">Трансфер</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Комфортабельный трансфер из аэропорта и ж/д вокзала Махачкалы в отель и обратно. Также организуем транспорт для экскурсий.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Встреча в аэропорту/вокзале с табличкой
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Комфортабельные автомобили бизнес-класса
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-600 mr-2">✓</span>
                    Предварительное бронирование
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительные услуги */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
            Дополнительные услуги
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-teal-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Услуга</th>
                  <th className="py-3 px-4 text-left">Описание</th>
                  <th className="py-3 px-4 text-left">Стоимость</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium">Прачечная</td>
                  <td className="py-3 px-4">Стирка и глажка одежды</td>
                  <td className="py-3 px-4">от 300 ₽</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Химчистка</td>
                  <td className="py-3 px-4">Профессиональная чистка одежды</td>
                  <td className="py-3 px-4">от 500 ₽</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Завтрак в номер</td>
                  <td className="py-3 px-4">Доставка завтрака в номер</td>
                  <td className="py-3 px-4">500 ₽</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Экскурсии</td>
                  <td className="py-3 px-4">Организация индивидуальных экскурсий</td>
                  <td className="py-3 px-4">от 1000 ₽</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Аренда велосипеда</td>
                  <td className="py-3 px-4">Горные и городские велосипеды</td>
                  <td className="py-3 px-4">500 ₽/час</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Бизнес-услуги</td>
                  <td className="py-3 px-4">Печать, сканирование, копирование</td>
                  <td className="py-3 px-4">от 20 ₽</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Няня</td>
                  <td className="py-3 px-4">Услуги профессиональной няни</td>
                  <td className="py-3 px-4">800 ₽/час</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Для получения дополнительной информации или бронирования услуг, пожалуйста, обратитесь на ресепшен или позвоните по телефону:
            </p>
            <a 
              href="tel:+78722123456" 
              className="inline-flex items-center bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <FaPhone className="mr-2" /> +7 (8722) 12-34-56
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 