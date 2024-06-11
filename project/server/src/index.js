const { CONFIG } = require("./config/app");
const { PORT, STATIC_PATH } = CONFIG;

const { appPath } = require("./utils/helpers");
const { app, server } = require("./app");
const express = require("express");
const { log } = require("./utils/logger");

require("./config/routes");
require("./config/socketEvents");

app.use(express.static(appPath(STATIC_PATH)));

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

log("App Started");
