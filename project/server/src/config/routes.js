const { app } = require("../app");
const { main } = require("../controllers/main");

/**
 * Главная страница
 */
app.get("/", main.index);
