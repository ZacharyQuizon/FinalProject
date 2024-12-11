

//server starter gang
const http = require('http'); //Imports the HTTP module, makes Node.js act as an HTTP server, require() include the module.

http.createServer(function (req,res) {  //creates the HTTP server, takes a callback function as an input, which handles each incoming request. req and res are requests and responses.
    res.writeHead(200, {'Content-Type': 'text/html'}); //writeHead sets the HTTP status code and headers for the response. 200 is the "OK"/success status code. {'Content-Type': 'text/html'} sets the Content-Type header, which tells the client to expect HTML content in the response.
    res.end('Hello World!');    //res.end sends the final response back and closes the connection. 'Hello World is the content being sent in the response body.
}).listen(8080);    //makes the server start listening for incoming requests on port 8080, meaning when you open http://localhost:8080 , the server will respond with the response body.






//database gang
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({ //Creates the connection to database. Connection pools help reduce time connecting to the MySQL server by reusing a previous connection and keeping it open.
    host: process.env.MYSQL_HOST,   
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();   //method that allows us to use async/await to handle the results of the queries. like a "promise" to do something in the future. Can make plans(callbacks) for what should happen when that promise is fulfilled(success) or rejected(failure). Like an if statement?

const result = await pool.query("SELECT * FROM transactions");  //await pauses the execution of the function until the query has finished.
console.log(result);








//pages
const express = require('express') //imports express
const app = express()   //initializes express application
const port = 3000

app.get('/', (req,res) => { //Routes HTTP GET requests to the specified path, associating them with designated callback functions. '/' indicates root path.
    res.send('Welcome to the homepage')    //sends "welcome to the home page" as a response to the client
})


app.get('/register', (req,res) => {
    res.send('this is the register page');
});
//gpt says post to create new user

app.get('/login', (req,res) => {
    res.send('this is the login page');
});
//gpt says post for jwt token

app.get('/dashboard', (req,res) => {
    res.send('this is the dashboard page');
});

app.get('/transactions', (req,res) => {
    res.send('this is the transactions page');
});
/*gpt says post to add transactions
get to fetch transactions
put /transactions/:id to update transactions
delete /transactions/:id to delete transactions
*/

app.get('/logout', (req,res) => {
    res.send('this is the logout page');
});

app.listen(port,() => { //starts the server on the previously set port
    console.log(`Example app listening on ${port}`) //the callback function logs a message when the server starts successfully.
})