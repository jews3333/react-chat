import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Item from './Item';

let url = '';

if(process.env.NODE_ENV == 'development'){
    url = 'http://localhost:3001';
} else {
    url = 'https://my-react-chatting-server.herokuapp.com';
}

const socket = io(url);

function Chat(props){

    const { user } = props.location.state;
    const [ message, setMessage ] = useState('');
    const [ recentChat, setRecentChet ] = useState();
    const [ stackChat, setStackChat ] = useState([]);

    useEffect(() => {
        socket.emit('room','라떼');
        console.log(socket);
        socket.on('pop', (usr, msg, date) => {
            setRecentChet({
                user: usr,
                message: msg,
                date: date
            });
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
            socket.emit("message", '라떼', user, message);
        }
    }

    

    return (
        <div id="chatArea">
            {
                stackChat.length > 0 ?
                    stackChat.map((obj, idx) => {
                        return <Item key={idx} user={obj.user} youser={user} message={obj.message} date={obj.date} />
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