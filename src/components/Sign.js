import React, { useState } from 'react';

function Sign(props){

    const [ user, setUser ] = useState('');

    const changeUserHandler = (e) => {
        setUser(e.target.value);
    }

    const submitHandler = () => {
        props.history.push({
            pathname: "/chat",
            state: {
                user: user
            }
        });
    }

    return (
        <div id="sign">
            <form onSubmit={submitHandler}>
                <input type="text" onChange={changeUserHandler} value={user} />
                <button type="submit">접속</button>
            </form>
        </div>
    )
}

export default Sign;