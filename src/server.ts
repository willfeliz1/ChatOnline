import express from 'express';
import socketIO from 'socket.io';

import routes from './routes';

const app = express();

app.get('/chatOnline', (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});

const server = app.listen(3333, () => {
  console.log('-- Server Started on port 3333 --');
});

const io = socketIO(server);

io.on('connection', socket => {
  console.log('an user is connected');

  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(express.json());
// app.use(routes);
