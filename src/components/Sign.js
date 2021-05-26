import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sign(){

    const [ user, setUser ] = useState('');

    const changeUserHandler = (e) => {
        setUser(e.target.value);
    }

    return (
        <div id="sign">
            <input type="text" onChange={changeUserHandler} value={user} />
            <Link to={{
                pathname: "/chat",
                state: {
                    user: user
                }
            }}>접속</Link>
        </div>
    )
}

export default Sign;