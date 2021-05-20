import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:3001");

function Main(){
    const [ user, setUser ] = useState('master');

    useEffect(() => {
        socket.emit('room', user);
    },[]);

    const clickHandler = () => {

        console.log(socket);

        const str = 'abc';

        socket.emit("alert", str);
    }

    return (
        <div>
            <button onClick={clickHandler}>클릭해봐</button>
        </div>
    )
}

export default Main;