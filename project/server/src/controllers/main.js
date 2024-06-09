const { publicPath } = require("../utils/helpers");

const main = {
  index: (_, res) => {
    res.sendFile(publicPath("index.html"));
  },
};

module.exports = {
  main,
};
