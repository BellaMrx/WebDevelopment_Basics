// embed module
const http = require('http');

// define constants
const HOST = 'localhost';
const PORT = 8000;

// request handler that accepts HTTP requests
const requestHandler = (request, response) => {
  // HTTP Response-Header definieren
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  // define HTTP response header
  response.write('Hello World');
  // exit HTTP and submit
  response.end();
};

// initialize HTTP server with request handler
const server = http.createServer(requestHandler);

// start HTTP server
server.listen(PORT, HOST, () => {
  // HTTP server started
  console.log(`Server started at http://${HOST}:${PORT}`);
});
