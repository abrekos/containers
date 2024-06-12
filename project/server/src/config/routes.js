const { app } = require("../app");
const { main } = require("../controllers/main");
const { healthcheck } = require("../controllers/healthcheck");

/**
 * Главная страница
 */
app.get("/", main.index);

/**
 * Состояние системы
 */
app.get("/healthcheck", healthcheck.get);
