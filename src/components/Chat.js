import React, { useState, useEffect } from 'react';
import useSign from '../hooks/useSign';
import io from 'socket.io-client';
import ChatItem from './ChatItem';
import { formatDate } from '../common';

//const url = 'https://my-react-chatting-server.herokuapp.com';
const url = 'http://localhost:3001';

const socket = io(url);

function Chat(props){

    const roomId = props.match.params.id;

    const { user } = useSign(); 
    const [ message, setMessage ] = useState('');
    const [ recentChat, setRecentChet ] = useState();
    const [ stackChat, setStackChat ] = useState([]);

    useEffect(() => {
        if(!user){
            props.history.push({
                pathname: "/"
            });
            return;
        }

        socket.emit('room',roomId);
        socket.on('pop', (usr, msg, dt) => {
            setRecentChet({
                user: usr,
                message: msg,
                date: formatDate(dt)
            });
        });
    },[user]);

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
            socket.emit("message", roomId, user.id, message, new Date());
        }
    }

    return (
        <div id="chatArea">
            {
                stackChat.length > 0 &&
                stackChat.map((obj, idx) => {
                    const before = stackChat[idx-1];
                    return <ChatItem key={idx} user={obj.user} youser={user.username} message={obj.message} date={obj.date} idx={idx} before={before} />
                })
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