import React, { useEffect } from 'react';

function Item({ user, youser, message }){

    useEffect(() => {
        console.log(user, youser);
    }, []);

    return (
        <div className={user === youser ? 'item self' : 'item'}>
            <p className="user">{user}</p>
            <p className="message">{message}</p>
        </div>
    )
}

export default Item;