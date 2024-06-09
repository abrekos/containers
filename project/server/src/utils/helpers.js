const path = require("path");
const { CONFIG } = require("../config/app");

const appPath = (...parts) => {
  return path.join(path.dirname(require.main.filename), ...parts);
};

const publicPath = (...parts) => {
  return appPath(CONFIG.STATIC_PATH, ...parts);
};

module.exports = {
  appPath,
  publicPath,
};
