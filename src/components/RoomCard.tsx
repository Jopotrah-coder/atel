import React from 'react';
import { Link } from 'react-router-dom';
import { Room } from '../types';
import { FaUsers, FaRulerCombined } from 'react-icons/fa';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img 
          src={room.images[0] || '/images/room-placeholder.jpg'} 
          alt={room.title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 right-0 bg-secondary text-white m-4 px-3 py-1 rounded-md">
          {room.price} ₽/ночь
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{room.title}</h3>
        
        <div className="flex justify-between text-gray-600 mb-4">
          <div className="flex items-center">
            <FaUsers className="mr-1" />
            <span>{room.capacity} чел.</span>
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="mr-1" />
            <span>{room.area} м²</span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-3">
          {room.description}
        </p>
        
        <div className="flex flex-wrap mb-4">
          {room.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm mr-2 mb-2">
              {amenity}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm">
              +{room.amenities.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/rooms/${room._id}`} 
            className="text-primary hover:text-primary-dark font-medium"
          >
            Подробнее
          </Link>
          <Link 
            to={`/booking/${room._id}`} 
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md"
          >
            Забронировать
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard; 