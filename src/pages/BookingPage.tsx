import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaInfoCircle, FaCheck, FaArrowRight } from 'react-icons/fa';

const BookingPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    roomType: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'card',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы код для отправки данных на сервер
    setStep(4); // Переход к сообщению об успешном бронировании
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Hero секция */}
      <div className="bg-teal-800 text-white py-12 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Бронирование номера</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Забронируйте номер онлайн и получите лучшие цены и специальные предложения
          </p>
        </div>
      </div>

      {/* Процесс бронирования */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Индикатор шагов */}
          <div className="mb-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-teal-800' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= 1 ? 'bg-lime-500 text-white' : 'bg-gray-200 text-gray-500'} mb-2`}>
                    1
                  </div>
                  <span className="text-sm">Даты</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-lime-500' : 'bg-gray-200'}`}></div>
                
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-teal-800' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= 2 ? 'bg-lime-500 text-white' : 'bg-gray-200 text-gray-500'} mb-2`}>
                    2
                  </div>
                  <span className="text-sm">Номер</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-lime-500' : 'bg-gray-200'}`}></div>
                
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-teal-800' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= 3 ? 'bg-lime-500 text-white' : 'bg-gray-200 text-gray-500'} mb-2`}>
                    3
                  </div>
                  <span className="text-sm">Оплата</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 4 ? 'bg-lime-500' : 'bg-gray-200'}`}></div>
                
                <div className={`flex flex-col items-center ${step >= 4 ? 'text-teal-800' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= 4 ? 'bg-lime-500 text-white' : 'bg-gray-200 text-gray-500'} mb-2`}>
                    4
                  </div>
                  <span className="text-sm">Готово</span>
                </div>
              </div>
            </div>
          </div>

          {/* Форма бронирования */}
          <div className="max-w-4xl mx-auto">
            {step === 1 && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-teal-800">Выберите даты проживания</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="checkIn" className="block text-gray-700 font-medium mb-2">Дата заезда</label>
                    <div className="relative">
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition pr-10"
                        required
                      />
                      <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="checkOut" className="block text-gray-700 font-medium mb-2">Дата выезда</label>
                    <div className="relative">
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        min={formData.checkIn || new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition pr-10"
                        required
                      />
                      <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="adults" className="block text-gray-700 font-medium mb-2">Взрослых</label>
                    <select
                      id="adults"
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                      required
                    >
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="children" className="block text-gray-700 font-medium mb-2">Детей</label>
                    <select
                      id="children"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                    >
                      {[0, 1, 2, 3].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors"
                    disabled={!formData.checkIn || !formData.checkOut}
                  >
                    Продолжить <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-teal-800">Выберите тип номера</h2>
                
                <div className="space-y-6 mb-8">
                  {/* Опция номера 1 */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-5 flex flex-col md:flex-row">
                      <div className="md:w-1/3 mb-4 md:mb-0">
                        <img 
                          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                          alt="Стандартный номер" 
                          className="w-full h-48 object-cover rounded"
                        />
                      </div>
                      <div className="md:w-2/3 md:pl-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-teal-800">Стандартный номер</h3>
                          <div className="text-right">
                            <p className="text-xl font-bold text-teal-800">5,000 ₽</p>
                            <p className="text-sm text-gray-500">за ночь</p>
                          </div>
                        </div>
                        
                        <div className="mt-3 text-gray-600">
                          <p>Уютный номер с одной двуспальной кроватью, кондиционером и видом на город.</p>
                          <div className="flex flex-wrap mt-2">
                            <span className="flex items-center text-sm text-gray-500 mr-4 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> Wi-Fi
                            </span>
                            <span className="flex items-center text-sm text-gray-500 mr-4 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> Кондиционер
                            </span>
                            <span className="flex items-center text-sm text-gray-500 mr-4 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> Телевизор
                            </span>
                            <span className="flex items-center text-sm text-gray-500 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> Ванная комната
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="roomType"
                              value="standard"
                              checked={formData.roomType === 'standard'}
                              onChange={handleChange}
                              className="form-radio text-teal-700 focus:ring-teal-600"
                            />
                            <span className="ml-2">Выбрать</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Опция номера 2 */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-5 flex flex-col md:flex-row">
                      <div className="md:w-1/3 mb-4 md:mb-0">
                        <img 
                          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                          alt="Люкс" 
                          className="w-full h-48 object-cover rounded"
                        />
                      </div>
                      <div className="md:w-2/3 md:pl-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-teal-800">Люкс</h3>
                          <div className="text-right">
                            <p className="text-xl font-bold text-teal-800">8,500 ₽</p>
                            <p className="text-sm text-gray-500">за ночь</p>
                          </div>
                        </div>
                        
                        <div className="mt-3 text-gray-600">
                          <p>Просторный номер с отдельной гостиной, кроватью king-size и видом на море.</p>
                          <div className="flex flex-wrap mt-2">
                            <span className="flex items-center text-sm text-gray-500 mr-4 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> Wi-Fi
                            </span>
                            <span className="flex items-center text-sm text-gray-500 mr-4 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> Кондиционер
                            </span>
                            <span className="flex items-center text-sm text-gray-500 mr-4 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> Мини-бар
                            </span>
                            <span className="flex items-center text-sm text-gray-500 mr-4 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> Гостиная
                            </span>
                            <span className="flex items-center text-sm text-gray-500 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> Вид на море
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="roomType"
                              value="luxury"
                              checked={formData.roomType === 'luxury'}
                              onChange={handleChange}
                              className="form-radio text-teal-700 focus:ring-teal-600"
                            />
                            <span className="ml-2">Выбрать</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Опция номера 3 */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-5 flex flex-col md:flex-row">
                      <div className="md:w-1/3 mb-4 md:mb-0">
                        <img 
                          src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                          alt="Семейный номер" 
                          className="w-full h-48 object-cover rounded"
                        />
                      </div>
                      <div className="md:w-2/3 md:pl-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-teal-800">Семейный номер</h3>
                          <div className="text-right">
                            <p className="text-xl font-bold text-teal-800">10,000 ₽</p>
                            <p className="text-sm text-gray-500">за ночь</p>
                          </div>
                        </div>
                        
                        <div className="mt-3 text-gray-600">
                          <p>Просторный номер с двумя спальнями, гостиной и столовой зоной, идеально подходит для семей.</p>
                          <div className="flex flex-wrap mt-2">
                            <span className="flex items-center text-sm text-gray-500 mr-4 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> 2 спальни
                            </span>
                            <span className="flex items-center text-sm text-gray-500 mr-4 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> Гостиная
                            </span>
                            <span className="flex items-center text-sm text-gray-500 mr-4 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> Мини-кухня
                            </span>
                            <span className="flex items-center text-sm text-gray-500 mb-2">
                              <FaCheck className="text-lime-600 mr-1" /> 2 ванные комнаты
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="roomType"
                              value="family"
                              checked={formData.roomType === 'family'}
                              onChange={handleChange}
                              className="form-radio text-teal-700 focus:ring-teal-600"
                            />
                            <span className="ml-2">Выбрать</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="border border-teal-700 text-teal-700 hover:bg-teal-50 font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Назад
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors"
                    disabled={!formData.roomType}
                  >
                    Продолжить <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-teal-800">Данные для бронирования</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">ФИО</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                      placeholder="Иванов Иван Иванович"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                      placeholder="example@mail.ru"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="specialRequests" className="block text-gray-700 font-medium mb-2">Особые пожелания</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                    placeholder="Если у вас есть особые пожелания, укажите их здесь"
                  ></textarea>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-teal-800">Способ оплаты</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleChange}
                        className="form-radio text-teal-700 focus:ring-teal-600"
                      />
                      <span className="ml-2">Банковская карта</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleChange}
                        className="form-radio text-teal-700 focus:ring-teal-600"
                      />
                      <span className="ml-2">Наличными при заселении</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="form-checkbox text-teal-700 focus:ring-teal-600 mt-1"
                      required
                    />
                    <span className="ml-2 text-gray-700">
                      Я согласен с <a href="#" className="text-teal-700 hover:underline">условиями бронирования</a> и даю согласие на обработку персональных данных
                    </span>
                  </label>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-8">
                  <h3 className="text-lg font-bold mb-2 text-teal-800">Детали бронирования</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Заезд:</span>
                      <span className="font-medium">{formData.checkIn}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Выезд:</span>
                      <span className="font-medium">{formData.checkOut}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Гости:</span>
                      <span className="font-medium">{formData.adults} взрослых, {formData.children} детей</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Тип номера:</span>
                      <span className="font-medium">
                        {formData.roomType === 'standard' ? 'Стандартный' : 
                         formData.roomType === 'luxury' ? 'Люкс' : 
                         formData.roomType === 'family' ? 'Семейный' : ''}
                      </span>
                    </li>
                    <li className="flex justify-between pt-2 border-t border-gray-200 mt-2">
                      <span className="font-bold">Итоговая стоимость:</span>
                      <span className="font-bold text-teal-800">
                        {formData.roomType === 'standard' ? '5,000' : 
                         formData.roomType === 'luxury' ? '8,500' : 
                         formData.roomType === 'family' ? '10,000' : ''} ₽ / ночь
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="border border-teal-700 text-teal-700 hover:bg-teal-50 font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Назад
                  </button>
                  <button
                    type="submit"
                    className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-colors"
                    disabled={!formData.name || !formData.email || !formData.phone || !formData.agreeTerms}
                  >
                    Забронировать
                  </button>
                </div>
              </form>
            )}
            
            {step === 4 && (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-lime-500 text-white rounded-full mb-6">
                  <FaCheck className="text-4xl" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-teal-800">Бронирование успешно оформлено!</h2>
                <p className="text-gray-600 mb-8">
                  Спасибо за ваше бронирование. Мы отправили подтверждение на вашу электронную почту.
                  Наш менеджер свяжется с вами в ближайшее время для подтверждения деталей.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-8 max-w-md mx-auto text-left">
                  <h3 className="text-lg font-bold mb-4 text-teal-800">Детали бронирования</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <span className="block text-sm text-gray-500">Номер бронирования</span>
                      <span className="font-medium">BK-{Math.floor(Math.random() * 100000)}</span>
                    </li>
                    <li>
                      <span className="block text-sm text-gray-500">Гость</span>
                      <span className="font-medium">{formData.name}</span>
                    </li>
                    <li>
                      <span className="block text-sm text-gray-500">Даты</span>
                      <span className="font-medium">{formData.checkIn} — {formData.checkOut}</span>
                    </li>
                    <li>
                      <span className="block text-sm text-gray-500">Тип номера</span>
                      <span className="font-medium">
                        {formData.roomType === 'standard' ? 'Стандартный' : 
                         formData.roomType === 'luxury' ? 'Люкс' : 
                         formData.roomType === 'family' ? 'Семейный' : ''}
                      </span>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/"
                  className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
                >
                  Вернуться на главную
                </Link>
                <div className="mt-8 flex items-center justify-center">
                  <FaInfoCircle className="text-teal-700 mr-2" />
                  <p className="text-sm text-gray-600">
                    Если у вас есть вопросы, пожалуйста, свяжитесь с нами по телефону +7 (8722) 12-34-56
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage; 