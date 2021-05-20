import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:3001");

function Chat(){
    const [ user, setUser ] = useState('abc');

    useEffect(() => {
        socket.emit('room', user);
        socket.on('wake', (message) => {
            console.log(message);
            alert(message);
        });
    },[]);

    return (
        <div>
            쳇
        </div>
    )
}

export default Chat;