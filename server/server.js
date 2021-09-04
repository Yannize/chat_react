const app = require('express')();
const http = require('http').createServer(app);
import chat from './controllers/chat';
app.get('/', (req, res) => {
  res.send('Yoooo !');
});

http.listen(3001, () => {
  console.log(`listening to http://localhost:3001`);
});

chat(http);
