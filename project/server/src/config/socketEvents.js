const { socketio } = require("../app");
const { socket } = require("../controllers/socket");

socketio.on("connection", socket.onConnection);
