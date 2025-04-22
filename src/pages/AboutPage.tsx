import React from 'react';
import { FaBuilding, FaUsers, FaSmile, FaHistory } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero секция */}
      <div className="bg-teal-800 text-white py-12 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">О нашем отеле</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Отель Махачкала — это комфорт и гостеприимство в самом сердце города
          </p>
        </div>
      </div>

      {/* Основная информация */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-teal-800">
                Гостиница с историей и традициями
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Отель Махачкала расположен в самом центре города, в непосредственной близости от главных достопримечательностей и деловых районов. Наша гостиница предлагает идеальное сочетание традиционного гостеприимства и современного комфорта.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Построенный в 2010 году, наш отель сочетает в себе элегантный дизайн, комфортабельные номера и высококачественный сервис. Мы стремимся создать для каждого гостя атмосферу домашнего уюта и заботы.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Наша миссия — превратить ваше пребывание в Махачкале в незабываемое впечатление, обеспечивая комфорт и внимание к деталям. Наш опытный персонал всегда готов помочь и сделать всё возможное для вашего удобства.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Отель Махачкала" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Карточки с информацией */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
            Почему мы особенные
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow transition-shadow hover:shadow-lg">
              <div className="bg-teal-700 text-lime-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <FaBuilding className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-teal-800">
                Великолепное расположение
              </h3>
              <p className="text-gray-600 text-center">
                В самом сердце Махачкалы, с видом на Каспийское море и в пешей доступности от ключевых достопримечательностей.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow transition-shadow hover:shadow-lg">
              <div className="bg-teal-700 text-lime-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <FaHistory className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-teal-800">
                Богатая история
              </h3>
              <p className="text-gray-600 text-center">
                Наш отель объединяет традиции дагестанского гостеприимства и современный комфорт, создавая уникальный опыт для гостей.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow transition-shadow hover:shadow-lg">
              <div className="bg-teal-700 text-lime-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-teal-800">
                Профессиональная команда
              </h3>
              <p className="text-gray-600 text-center">
                Наш персонал — это опытные специалисты, готовые обеспечить безупречный сервис и внимание к каждой детали.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow transition-shadow hover:shadow-lg">
              <div className="bg-teal-700 text-lime-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <FaSmile className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-teal-800">
                Индивидуальный подход
              </h3>
              <p className="text-gray-600 text-center">
                Мы придаем особое значение индивидуальным потребностям каждого гостя, создавая персонализированный опыт проживания.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 