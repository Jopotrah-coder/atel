import React from 'react';

const PolicyPage: React.FC = () => {
  return (
    <div>
      {/* Hero секция */}
      <div className="bg-teal-800 text-white py-12 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Политика конфиденциальности</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Мы ценим ваше доверие и стремимся защитить вашу личную информацию
          </p>
        </div>
      </div>

      {/* Основная информация */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-teal-800">1. Введение</h2>
              <p className="text-gray-700 mb-4">
                ООО "Отель Махачкала" (далее - "Мы", "Отель") уважает конфиденциальность ваших данных. В этой политике конфиденциальности объясняется, какую информацию мы собираем, как мы её используем и каким образом мы защищаем вашу личную информацию.
              </p>
              <p className="text-gray-700">
                Используя наши услуги или посещая наш веб-сайт, вы принимаете практики, описанные в данной политике конфиденциальности.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-teal-800">2. Какую информацию мы собираем</h2>
              <p className="text-gray-700 mb-4">
                Мы собираем следующие типы информации:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Личная информация:</strong> имя, адрес электронной почты, номер телефона, почтовый адрес, данные паспорта.</li>
                <li><strong>Платежная информация:</strong> данные кредитной карты, история транзакций (обрабатываются через защищенные платежные системы).</li>
                <li><strong>Информация о бронировании:</strong> даты проживания, предпочтения по номеру, специальные запросы.</li>
                <li><strong>Информация о посещении сайта:</strong> IP-адрес, тип браузера, время доступа, посещенные страницы.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-teal-800">3. Как мы используем вашу информацию</h2>
              <p className="text-gray-700 mb-4">
                Мы используем собранную информацию для следующих целей:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Обработка и подтверждение ваших бронирований.</li>
                <li>Предоставление запрошенных услуг во время вашего пребывания.</li>
                <li>Улучшение качества обслуживания клиентов.</li>
                <li>Отправка подтверждений бронирования и обновлений.</li>
                <li>Обработка платежей и возвратов.</li>
                <li>Отправка информации о специальных предложениях и акциях (с вашего согласия).</li>
                <li>Улучшение нашего веб-сайта и услуг.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-teal-800">4. Защита информации</h2>
              <p className="text-gray-700 mb-4">
                Мы применяем соответствующие технические и организационные меры для защиты вашей личной информации от несанкционированного доступа, случайной потери, уничтожения или повреждения. Все транзакции обрабатываются через зашифрованное соединение SSL.
              </p>
              <p className="text-gray-700">
                Мы храним вашу личную информацию только в течение времени, необходимого для достижения целей, для которых она была собрана, или в соответствии с требованиями законодательства.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-teal-800">5. Передача информации третьим лицам</h2>
              <p className="text-gray-700 mb-4">
                Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам без вашего согласия, за исключением следующих случаев:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Доверенным поставщикам услуг, которые помогают нам в работе нашего бизнеса (обработка платежей, аналитика, маркетинг).</li>
                <li>В случаях, предусмотренных законодательством.</li>
                <li>Для защиты наших прав, собственности или безопасности.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-teal-800">6. Ваши права</h2>
              <p className="text-gray-700 mb-4">
                Вы имеете следующие права в отношении своих персональных данных:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Право на доступ к своим персональным данным.</li>
                <li>Право на исправление неточных персональных данных.</li>
                <li>Право на удаление своих персональных данных.</li>
                <li>Право на ограничение обработки персональных данных.</li>
                <li>Право на возражение против обработки персональных данных.</li>
                <li>Право на переносимость данных.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-teal-800">7. Файлы Cookie</h2>
              <p className="text-gray-700 mb-4">
                Наш веб-сайт использует файлы cookie для улучшения пользовательского опыта. Вы можете настроить свой браузер так, чтобы он отклонял файлы cookie или уведомлял вас, когда они отправляются. Однако некоторые функции сайта могут не работать должным образом без файлов cookie.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-teal-800">8. Изменения в политике конфиденциальности</h2>
              <p className="text-gray-700 mb-4">
                Мы можем обновлять нашу политику конфиденциальности время от времени. Все изменения будут размещены на этой странице с указанием даты последнего обновления. Мы рекомендуем периодически проверять эту страницу для получения последней информации о наших практиках конфиденциальности.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-teal-800">9. Контактная информация</h2>
              <p className="text-gray-700 mb-4">
                Если у вас есть вопросы относительно нашей политики конфиденциальности или обработки ваших данных, пожалуйста, свяжитесь с нами:
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="mb-2"><strong>ООО "Отель Махачкала"</strong></p>
                <p className="mb-2">Адрес: ул. Ленина 1, Махачкала, Республика Дагестан, 367000</p>
                <p className="mb-2">Телефон: +7 (8722) 12-34-56</p>
                <p>Email: privacy@hotel-makhachkala.ru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage; 