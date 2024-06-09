const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const socketio = new Server(server);

module.exports = {
  app,
  socketio,
  server,
};
