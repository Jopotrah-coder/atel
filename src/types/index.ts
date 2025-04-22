// Тип для номера отеля
export interface Room {
  _id: string;
  title: string;
  description: string;
  price: number;
  capacity: number;
  area: number;
  images: string[];
  amenities: string[];
  travellineId: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

// Тип для бронирования
export interface Booking {
  _id: string;
  userId: string;
  room: Room;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  travellineReservationId?: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  createdAt: string;
  updatedAt: string;
}

// Тип для тарифа номера
export interface RoomRate {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  mealPlan: string;
  cancellationPolicy: string;
}

// Тип для данных бронирования
export interface BookingFormData {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

// Тип для параметров поиска номеров
export interface SearchParams {
  checkIn: string;
  checkOut: string;
  guests: number;
} 