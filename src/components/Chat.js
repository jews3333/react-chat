import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Item from './Item';

const socket = io("http://localhost:3001");

function Chat(props){

    const { user } = props.location.state;
    const [ message, setMessage ] = useState('');
    const [ recentChat, setRecentChet ] = useState();
    const [ stackChat, setStackChat ] = useState([]);

    useEffect(() => {
        socket.emit('room','1234');
        socket.on('pop', (usr, msg) => {
            setRecentChet({
                user: usr,
                message: msg
            });
            console.log(recentChat);
        });
    },[]);

    useEffect(() => {
        if(recentChat){
            setStackChat([
                ...stackChat,
                recentChat
            ]);
        }
        setMessage('');
    },[recentChat])

    const changeMessageHandler = (e) => {
        setMessage(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(message){
            socket.emit("message", '1234', user, message);
        }
    }

    

    return (
        <div id="chatArea">
            {
                stackChat.length > 0 ?
                    stackChat.map((obj, idx) => {
                        return <Item key={idx} user={obj.user} youser={user} message={obj.message} />
                    })
                : null
            }
            <div id="chatForm">
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={changeMessageHandler} value={message} />
                    <button>전송</button>
                </form>
            </div>
        </div>
    )
}

export default Chat;