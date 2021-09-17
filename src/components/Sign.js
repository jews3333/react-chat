import React, { useEffect, useState } from 'react';
import useSign from '../hooks/useSign';

function Sign(props){

    const { user, onSignIn, onSignOut } = useSign();
    const [ id, setId ] = useState('');
    const [ pw, setPw ] = useState('');

    const changeUserHandler = (e) => {
        setId(e.target.value);
    }

    const changePwdHandler = (e) => {
        setPw(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        onSignIn({
            id: id,
            password: pw
        });
    }

    useEffect(() => {
        if(user){
            props.history.push({
                pathname: "/front"
            });
        }
    },[user]);

    return (
        <div id="signForm">
            <form onSubmit={submitHandler}>
                <div className="form-row">
                    <input type="text" onChange={changeUserHandler} />
                </div>
                <div className="form-row">
                    <input type="password" onChange={changePwdHandler} />
                </div>
                <div className="form-row">
                    <button type="submit">로그인</button>
                </div>
            </form>
        </div>
    )
}

export default Sign;