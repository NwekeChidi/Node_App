/*
This is the primary file for the API
*/

//Dependecies
const http = require('http');
const url = require('url');

//Create server to respond to requests with a string
const server = http.createServer((req, res) => {
    res.end("Hello World\n");
})

// Fire up server
let port = 3000;
server.listen(port, ()=>{
    console.log("Server is live and listening on port ", port);
})