import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'hello world'});
});

app.listen(3333, () => {
  console.log('-- Server Started on port 3333 --');
})