import React, { useEffect } from 'react';

function Item({ user, youser, message, date }){

    return (
        <div className={user === youser ? 'item self' : 'item'}>
            <p className="user">{user}</p>
            <p className="message">{message}</p>
            <p className="date">{date}</p>
        </div>
    )
}

export default Item;