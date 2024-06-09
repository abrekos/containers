const { socketio } = require("../app");

const socket = {
  onConnection: (s) => {
    console.log("User connected");

    s.on("message", socket.onMessage);
    s.on("disconnect", socket.onDisconnect);
  },

  onMessage: (message) => {
    console.log("message: " + message);
    socketio.emit("message", message);
  },

  onDisconnect: () => {
    console.log("User disconnected");
  },
};

module.exports = {
  socket,
};
