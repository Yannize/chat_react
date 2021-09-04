export default (http) => {
  const io = require('socket.io')(http, {
    cors: {
      origin: ['http://localhost:3000'],
    },
  });

  io.on('connection', (socket) => {
    socket.on('send_message', (message) => {
      socket.broadcast.emit('receive_message', message);
    });
  });
};
