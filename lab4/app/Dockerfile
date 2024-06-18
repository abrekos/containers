# 1. Фикс первой плохой практики
# Не используется тег latest, таким образом всегда будет
# использоваться одна и та же версия базового образа
FROM node:22-alpine

RUN mkdir -p /var/www/app
WORKDIR /var/www/app

# 2. Фикс второй плохой практики
# Сначала копируем package.json и устанавливаем зависимости
COPY ./project/server/package.json ./
RUN npm install

# и только затем копируем все остальное
COPY ./project/server ./

EXPOSE 3000

# 3. Фикс третьей плохой практики
# Здесь используется том, который позволит хранить постоянные данные
VOLUME ./src/storage

ENTRYPOINT npm start