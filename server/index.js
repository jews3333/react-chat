const http = require('http');
const express = require('express'); 
const cors = require('cors');
const app = express();

app.use(cors());

const server = http.createServer(app);
const socketio = require('socket.io');
const origin = process.env.PORT ? 'https://my-react-chatting.herokuapp.com' : 'http://localhost:3000';
const io = socketio(server, {
    cors: {
        //origin: ['https://my-react-chatting.herokuapp.com'],
        origin: [origin],
        methods: ['GET','POST']
    }
});
const port = process.env.PORT || 3001;


server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/', (req, res, next) => {
    res.json(`Listening on port ${port}`);
});

io.on('connection', (socket) => {
    socket.on('room', (id) => {
        socket.join(id);
    });

    socket.on('message', (id, user, message) => {
        io.to(id).emit('pop', user, message);
    });
});