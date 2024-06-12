# Change Log

- В приложение добавлена библиотека `pg` для работы с postgres
- Добавлен новый HTTP эндпоинт: GET /healthcheck, который используется в healthcheck docker compose
- Добавлена команда в package.json на запуск миграции
- Добавлен скрипт, который выполняет миграцию БД
- Добавлен .env с переменными окружения
- Написан docker-compose.yml