import React, { useState, useEffect } from 'react';
import useSign from '../hooks/useSign';
import io from 'socket.io-client';
import Item from './Item';

//const url = 'https://my-react-chatting-server.herokuapp.com';
const url = 'http://localhost:3001';

const socket = io(url);

function Chat(props){

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

        socket.emit('room','라떼');
        socket.on('pop', (usr, msg, date) => {
            setRecentChet({
                user: usr,
                message: msg,
                date: date
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
            socket.emit("message", '라떼', user.username, message, '2021-07-23');
        }
    }

    

    return (
        <div id="chatArea">
            {
                stackChat.length > 0 ?
                    stackChat.map((obj, idx) => {
                        const before = stackChat[idx-1];
                        return <Item key={idx} user={obj.user} youser={user.username} message={obj.message} date={obj.date} before={before} idx={idx} />
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