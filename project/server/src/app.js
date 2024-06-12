const dotenv = require("dotenv");
const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const { Client: PostgresClient } = require("pg");

dotenv.config();

const socketio = new Server(server);

const db = new PostgresClient({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
});

module.exports = {
  app,
  socketio,
  server,
  db,
};
