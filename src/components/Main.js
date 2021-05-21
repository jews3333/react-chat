import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Item from './Item';

const socket = io("http://localhost:3001");

function Main(){
    const [ user, setUser ] = useState('master');
    const [ message, setMessage ] = useState('');
    const [ chat, setChat ] = useState([]);

    useEffect(() => {
        socket.emit('room','1234');
        socket.on('pop', (msg) => {
            
        });
    },[]);

    const changeMessageHandler = (e) => {
        setMessage(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(message){

            setChat([
                ...chat,
                {
                    user: user,
                    message: message
                }
            ]);

            socket.emit("message", '1234', message);
            
            setMessage('');
        }
    }

    

    return (
        <div id="chatArea">
            {
                chat ?
                    chat.map((obj, idx) => {
                        return <Item key={idx} user={obj.user} message={obj.message} />
                    })
                : null
            }
            <div>
                <input type="text" onChange={(e) => setUser(e.target.value)} value={user} />
            </div>
            <div id="chatForm">
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={changeMessageHandler} value={message} />
                    <button>전송</button>
                </form>
            </div>
        </div>
    )
}

export default Main;