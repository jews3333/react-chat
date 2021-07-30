import React from 'react';

function ChatItem({ idx, user, youser, message, date, before }){

    return (
        <div className={user === youser ? 'item self' : 'item'}>
            <p className="user">{user}</p>
            <p className="message">{message}</p>
            <p className="date">{date}</p>
        </div>
    )
}

export default ChatItem;