# Використання Node.js образу
FROM node:lts

# Встановлення робочої директорії
WORKDIR /app

# Копіюємо package.json і package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проєкт у контейнер
COPY . .

# Вказуємо порт для Express-додатка
EXPOSE 3000

# Команда для запуску додатка
CMD ["node", "app.js"]
