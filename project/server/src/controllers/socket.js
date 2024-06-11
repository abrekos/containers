const { socketio } = require("../app");
const { log } = require("../utils/logger");

const socket = {
  onConnection: (s) => {
    console.log("User connected");
    log("User connected");

    s.on("message", socket.onMessage);
    s.on("disconnect", socket.onDisconnect);
  },

  onMessage: (message) => {
    console.log("message: " + message);
    socketio.emit("message", message);

    log("Message " + message);
  },

  onDisconnect: () => {
    console.log("User disconnected");
    log("User disconnected");
  },
};

module.exports = {
  socket,
};
