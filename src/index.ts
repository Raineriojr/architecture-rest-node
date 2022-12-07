import express from 'express';
import routes from './routes/users.routes.js';

const port = 3000;
const url = 'http://localhost';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(port, () => {
  console.log(`server running in ${url}:${port}`)
})