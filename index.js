const http = require('http'); //Imports the HTTP module, makes Node.js act as an HTTP server, require() include the module.

http.createServer(function (req,res) {  //creates the HTTP server, takes a callback function as an input, which handles each incoming request. req and res are requests and responses.
    res.writeHead(200, {'Content-Type': 'text/html'}); //writeHead sets the HTTP status code and headers for the response. 200 is the "OK"/success status code. {'Content-Type': 'text/html'} sets the Content-Type header, which tells the client to expect HTML content in the response.
    res.end('Hello World!');    //res.end sends the final response back and closes the connection. 'Hello World is the content being sent in the response body.
}).listen(8080);    //makes the server start listening for incoming requests on port 8080, meaning when you open http://localhost:8080 , the server will respond with the response body.