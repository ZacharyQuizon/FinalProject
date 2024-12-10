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