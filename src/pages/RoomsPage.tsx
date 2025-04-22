import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import RoomCard from '../components/RoomCard';
import { Room, SearchParams } from '../types';
import { roomApi, travellineApi } from '../api/api';
import { FaFilter, FaSortAmountDown, FaSortAmountUpAlt } from 'react-icons/fa';

const RoomsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [capacity, setCapacity] = useState<number>(1);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // Получить параметры поиска из URL
  useEffect(() => {
    const checkIn = searchParams.get('checkIn') || '';
    const checkOut = searchParams.get('checkOut') || '';
    const guests = Number(searchParams.get('guests')) || 2;

    if (checkIn && checkOut) {
      // Если есть параметры поиска, загружаем доступные номера через TravelLine API
      const fetchAvailableRooms = async () => {
        try {
          setLoading(true);
          const availableRooms = await travellineApi.getAvailableRooms(
            checkIn,
            checkOut,
            guests
          );
          setRooms(availableRooms);
          setFilteredRooms(availableRooms);
          // Установить начальный диапазон цен
          if (availableRooms.length > 0) {
            const prices = availableRooms.map((room: Room) => room.price);
            setPriceRange([
              Math.min(...prices),
              Math.max(...prices),
            ]);
          }
        } catch (error) {
          console.error('Ошибка при загрузке доступных номеров:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchAvailableRooms();
      setCapacity(guests);
    } else {
      // Если нет параметров поиска, загружаем все номера
      const fetchAllRooms = async () => {
        try {
          setLoading(true);
          const allRooms = await roomApi.getAllRooms();
          setRooms(allRooms);
          setFilteredRooms(allRooms);
          // Установить начальный диапазон цен
          if (allRooms.length > 0) {
            const prices = allRooms.map((room: Room) => room.price);
            setPriceRange([
              Math.min(...prices),
              Math.max(...prices),
            ]);
          }
        } catch (error) {
          console.error('Ошибка при загрузке номеров:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchAllRooms();
    }
  }, [searchParams]);

  // Фильтрация и сортировка номеров
  useEffect(() => {
    let result = [...rooms];

    // Фильтрация по цене
    result = result.filter(
      (room) => room.price >= priceRange[0] && room.price <= priceRange[1]
    );

    // Фильтрация по вместимости
    result = result.filter((room) => room.capacity >= capacity);

    // Сортировка по цене
    result.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setFilteredRooms(result);
  }, [rooms, priceRange, capacity, sortOrder]);

  // Обработчик поиска номеров
  const handleSearch = (params: SearchParams) => {
    setSearchParams({
      checkIn: params.checkIn,
      checkOut: params.checkOut,
      guests: params.guests.toString(),
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Номера отеля</h1>

      {/* Форма поиска */}
      <div className="mb-8">
        <SearchForm
          onSearch={handleSearch}
          className="bg-white shadow-md rounded-lg"
        />
      </div>

      {/* Фильтры и результаты */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Фильтры для мобильных устройств */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-md flex items-center"
          >
            <FaFilter className="mr-2" />
            {isFilterOpen ? 'Скрыть фильтры' : 'Показать фильтры'}
          </button>
        </div>

        {/* Колонка с фильтрами */}
        <div
          className={`w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 ${
            isFilterOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Фильтры</h2>

          {/* Фильтр по цене */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Цена за ночь</h3>
            <div className="flex justify-between mb-2">
              <span>{priceRange[0]} ₽</span>
              <span>{priceRange[1]} ₽</span>
            </div>
            <input
              type="range"
              min={priceRange[0]}
              max={priceRange[1]}
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-full"
            />
          </div>

          {/* Фильтр по количеству гостей */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Количество гостей</h3>
            <select
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Результаты поиска */}
        <div className="w-full md:w-3/4">
          {/* Сортировка и количество результатов */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex justify-between items-center">
            <span className="text-gray-600">
              Найдено номеров: {filteredRooms.length}
            </span>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="flex items-center text-gray-600 hover:text-primary"
            >
              <span className="mr-2">Сортировать по цене</span>
              {sortOrder === 'asc' ? (
                <FaSortAmountUpAlt />
              ) : (
                <FaSortAmountDown />
              )}
            </button>
          </div>

          {/* Список номеров */}
          {loading ? (
            <div className="text-center py-8">Загрузка...</div>
          ) : filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredRooms.map((room) => (
                <RoomCard key={room._id} room={room} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white shadow-md rounded-lg">
              <p className="text-gray-600">
                Подходящих номеров не найдено. Попробуйте изменить параметры поиска.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage; 