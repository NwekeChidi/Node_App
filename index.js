/*
This is the primary file for the API
*/

//Dependecies
const http = require('http');
const url = require('url');
const config = require('./config');

//Create server to respond to requests with a string
const server = http.createServer((req, res) => {
    res.end("Hello World\n");
})

// Fire up server
let port = config.port;
server.listen(port, ()=>{
    console.log("Server is live and listening on port ", port);
})