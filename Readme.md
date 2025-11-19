Запуск проекта "Clothing Store"

Требования

- Node.js (v18+)
- npm или yarn
- MySQL/MariaDB (например, через XAMPP)
- phpMyAdmin (для удобного управления БД)

Установка
1. Клонируйте репозиторий: git clone https://github.com/your-username/clothing-store.git
cd clothing-store
2. Установите зависимости: npm i
3. Создайте файл .env: 

DB_HOST=localhost
DB_PORT=3306
DB_NAME=clothingstore
DB_USER=root
DB_PASS=

ADMIN_EMAIL=введите свои данные
ADMIN_PASS=введите свои данные
USER_EMAIL=введите свои данные
USER_PASS=введите свои данные

Не публикуйте .env в открытом доступе!

4. Создайте базу данных: 

Откройте http://localhost/phpmyadmin
Создайте базу данных с именем clothingstore

5. Запустите сервер: npm start

Доступ к приложению

Клиентская часть (EJS): http://localhost:3000
Swagger-документация API: http://localhost:3000/api-docs
Остановка сервера: Ctrl+C

Тестовые пользователи

В базе данных автоматически создаются тестовые пользователи (администратор и обычный пользователь). Их логины и пароли не отображаются в интерфейсе и не публикуются в документации.

Для тестирования используйте данные, указанные в `.env` или добавьте их вручную через phpMyAdmin.
Пароли захешированы через bcrypt и используются только в учебных целях.
