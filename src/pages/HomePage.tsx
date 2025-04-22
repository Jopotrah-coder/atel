import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import RoomCard from '../components/RoomCard';
import { Room } from '../types';
import { roomApi } from '../api/api';
import { FaCheck, FaStar, FaLocationArrow, FaWifi, FaUtensils } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const [featuredRooms, setFeaturedRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const rooms = await roomApi.getAllRooms();
        setFeaturedRooms(rooms.slice(0, 3));
      } catch (error) {
        console.error('Ошибка при загрузке номеров:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      {/* Hero секция */}
      <div className="bg-teal-700 text-white">
        {/* Фоновое изображение */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
            alt="Отель в Махачкале" 
            className="w-full h-[60vh] object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-800/50 to-teal-800/80"></div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Отель Махачкала
                </h1>
                <p className="text-xl text-teal-100 mb-8">
                  Идеальное место для отдыха на берегу Каспийского моря
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                  <Link 
                    to="/rooms" 
                    className="bg-lime-600 hover:bg-lime-700 text-white font-bold px-8 py-3 rounded-md"
                  >
                    Смотреть номера
                  </Link>
                  <a 
                    href="tel:+78722123456" 
                    className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold px-8 py-3 rounded-md"
                  >
                    +7 (8722) 12-34-56
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Форма бронирования */}
        <div className="container mx-auto px-6 -mt-16 relative z-10 pb-8">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto border-b-4 border-lime-500">
            <h2 className="text-teal-800 text-xl font-bold mb-6 text-center">Забронировать номер</h2>
            <SearchForm className="bg-transparent shadow-none" />
          </div>
        </div>
      </div>

      {/* Преимущества отеля */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-teal-800">Почему гости выбирают нас</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="bg-teal-700 text-lime-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaLocationArrow className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-800">Удобное расположение</h3>
              <p className="text-gray-600">
                В самом центре города, рядом с основными достопримечательностями и в 5 минутах ходьбы от набережной.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="bg-teal-700 text-lime-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaStar className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-800">Высокий уровень сервиса</h3>
              <p className="text-gray-600">
                Внимательный персонал, круглосуточное обслуживание и индивидуальный подход к каждому гостю.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="bg-teal-700 text-lime-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaCheck className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-800">Современные удобства</h3>
              <p className="text-gray-600">
                Бесплатный Wi-Fi, кондиционеры, спа-зона, тренажерный зал и ресторан с кавказской и европейской кухней.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Популярные номера */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-teal-800">Популярные номера</h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto"></div>
          </div>
          
          {loading ? (
            <div className="text-center py-8">Загрузка...</div>
          ) : featuredRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredRooms.map((room) => (
                <RoomCard key={room._id} room={room} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">Номера пока не добавлены</p>
              <Link
                to="/rooms"
                className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Посмотреть все номера
              </Link>
            </div>
          )}
          
          {featuredRooms.length > 0 && (
            <div className="text-center mt-10">
              <Link
                to="/rooms"
                className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Смотреть все номера
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 