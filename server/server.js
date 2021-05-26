const http = require('http');
const express = require('express'); 
const cors = require('cors');
const app = express();

app.use(cors());

const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server, {
    cors: {
        origin: ['https://my-react-chatting.herokuapp.com'],
        methods: ['GET','POST']
    }
});
const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/', (req, res, next) => {
    res.json('hi');
});

io.on('connection', (socket) => {
    socket.on('room', (id) => {
        socket.join(id);
    });

    socket.on('message', (id, user, message) => {
        io.to(id).emit('pop', user, message);
    });
});