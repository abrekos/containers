const healthcheck = {
  get: (_, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "ok " }));
  },
};

module.exports = {
  healthcheck,
};
