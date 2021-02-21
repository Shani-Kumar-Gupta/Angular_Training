const express = require('express'); // Used to create a web server
const bodyParser = require('body-parser'); // Used as Middleware

const PORT = 3000
const api = require('./routes/api');

const app = express() // Created instance of express

app.use(bodyParser.json()) // Created middleware to handle json data

app.use('/api', api);

app.get('/', function(req, res){
    res.send('Hello from server')
})

app.listen(PORT, () => {
    console.log('Server running on localhost:'+ PORT);
})