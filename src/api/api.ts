import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API для работы с номерами
export const roomApi = {
  // Получить все номера
  getAllRooms: async () => {
    const response = await api.get('/rooms');
    return response.data;
  },
  
  // Получить номер по ID
  getRoomById: async (id: string) => {
    const response = await api.get(`/rooms/${id}`);
    return response.data;
  },
};

// API для работы с бронированиями
export const bookingApi = {
  // Создать бронирование
  createBooking: async (bookingData: any) => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },
  
  // Получить бронирования пользователя
  getUserBookings: async (userId: string) => {
    const response = await api.get(`/bookings/user/${userId}`);
    return response.data;
  },
  
  // Отменить бронирование
  cancelBooking: async (id: string) => {
    const response = await api.delete(`/bookings/${id}`);
    return response.data;
  },
};

// API для работы с TravelLine
export const travellineApi = {
  // Получить доступные номера
  getAvailableRooms: async (checkIn: string, checkOut: string, guests: number) => {
    const response = await api.get('/travelline/available-rooms', {
      params: { checkIn, checkOut, guests },
    });
    return response.data;
  },
  
  // Получить тарифы для номера
  getRoomRates: async (roomId: string, checkIn: string, checkOut: string, guests: number) => {
    const response = await api.get('/travelline/rates', {
      params: { roomId, checkIn, checkOut, guests },
    });
    return response.data;
  },
  
  // Создать бронирование в TravelLine
  createReservation: async (reservationData: any) => {
    const response = await api.post('/travelline/reservation', reservationData);
    return response.data;
  },
};

export default api; 