const fs = require("fs");
const os = require("os");
const { CONFIG } = require("../config/app");

const log = (data, level = "info") => {
  const datetime = new Date().toString();
  const row = `[${level}] ${datetime} - ${data}` + os.EOL;

  fs.appendFile(CONFIG.LOG_FILE, row, (error) => {
    console.error(error);
  });
};

module.exports = {
  log,
};
