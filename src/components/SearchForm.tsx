import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { SearchParams } from '../types';

interface SearchFormProps {
  onSearch?: (params: SearchParams) => void;
  className?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, className }) => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date>(addDays(new Date(), 2));
  const [guests, setGuests] = useState<number>(2);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const searchParams: SearchParams = {
      checkIn: format(checkIn, 'yyyy-MM-dd'),
      checkOut: format(checkOut, 'yyyy-MM-dd'),
      guests,
    };
    
    if (onSearch) {
      onSearch(searchParams);
    } else {
      navigate(`/rooms?checkIn=${searchParams.checkIn}&checkOut=${searchParams.checkOut}&guests=${searchParams.guests}`);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className || ''}`}>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="checkIn" className="block text-gray-700 mb-2">
              Дата заезда
            </label>
            <DatePicker
              id="checkIn"
              selected={checkIn}
              onChange={(date: Date) => setCheckIn(date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={new Date()}
              locale={ru}
              dateFormat="dd.MM.yyyy"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-primary-light focus:outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="checkOut" className="block text-gray-700 mb-2">
              Дата выезда
            </label>
            <DatePicker
              id="checkOut"
              selected={checkOut}
              onChange={(date: Date) => setCheckOut(date)}
              selectsEnd
              startDate={checkIn}
              endDate={checkOut}
              minDate={addDays(checkIn, 1)}
              locale={ru}
              dateFormat="dd.MM.yyyy"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-primary-light focus:outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="guests" className="block text-gray-700 mb-2">
              Количество гостей
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-primary-light focus:outline-none"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md transition duration-300"
            >
              Найти номера
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm; 