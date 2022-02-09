const path = require('path');
const http = require('http'); // http
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server); // server is passed on here.


const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, './public');

app.use(express.static(publicDirectoryPath)) // will let use public stuff.


let count = 0;
io.on('connection',()=>{
    console.log('new websocket connection')
})

server.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
