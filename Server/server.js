const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); 

server.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use((_, res, next) => {
  setTimeout(next, 1000)
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});