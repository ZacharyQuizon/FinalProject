const express = require('express') //imports express
const app = express()   //initializes express application
const port = 3000

app.get('/', (req,res) => { //Routes HTTP GET requests to the specified path, associating them with designated callback functions. '/' indicates root path.
    res.send('Welcome to the homepage')    //sends "welcome to the home page" as a response to the client
})

app.get('/signup')

app.get('/login')

app.get('/dashboard')

app.get('/transactions')

app.get('/logout')

app.listen(port,() => { //starts the server on the previously set port
    console.log(`Example app listening on ${port}`) //the callback function logs a message when the server starts successfully.
})