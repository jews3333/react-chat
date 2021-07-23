import React from 'react';

function Item({ idx, user, youser, message, date, before }){
    console.log(before)

    const compare = () => {
        if(idx > 0){
            if(before.username != user) return false;
            else return true;
        } else {
            return true;
        }
        
    }

    return (
        <div className={user === youser ? 'item self' : 'item'}>
            {compare() ? <p className="user">{user}</p> : null}
            <p className="message">{message}</p>
            {compare() ? <p className="date">{date}</p> : null}
        </div>
    )
}

export default Item;