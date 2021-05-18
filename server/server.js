const http = require('http');
const express = require('express'); 
const cors = require('cors');
const app = express();

app.use(cors());

const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);
const port = 3001;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/', (req, res, next) => {
    res.json('hi');
});

io.on('connection', (socket) => {
    socket.on('newUser', (data) => {
        io.emit('enter', data);
    });

    socket.on('message', (data) => {
        console.log('client가 보낸 데이터:', data);
        io.emit('upload', data);
    });

    socket.on('leaveUser', (nick) => {
        io.emit('out', nick);
    });
});