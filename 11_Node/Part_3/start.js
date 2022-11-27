const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = 'localhost';
const PORT = 8000;

const requestHandler = (request, response) => {
  console.log(`Requested URL: ${request.url}`);
  if (request.url === '/static/html/index.html' || request.url == '/') {
    console.log('Load HTML file');
    fs.readFile(pathToFile, (error, data) => {
      if (error) {
        console.error(error);
        response.writeHead(404);
        response.end('Error loading HTML file');
      } else {
        response.setHeader('Content-Type', 'text/html');
        response.writeHead(200);
        response.end(data.toString());
      }
    });
  } else if (request.url === '/static/css/styles.css') {
    console.log('Loading CSS file');
    const pathToFile = path.join(__dirname, request.url);
    fs.readFile(pathToFile, (error, data) => {
      if (error) {
        console.error(error);
        response.writeHead(404);
        response.end('Error loading CSS file');
      } else {
        response.setHeader('Content-Type', 'text/css');
        response.writeHead(200);
        response.end(data.toString());
      }
    });
  } else {
    response.writeHead(404);
	response.end('Error loading the file');
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, HOST, () => {
  console.log(`Server started at http://${HOST}:${PORT}`);
});
