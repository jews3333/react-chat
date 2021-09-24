import React, { useState } from 'react';

function MakeRoom(props){

    const { createHandler, closeHandler, room, open } = props;

    const [ newRoom, setNewRoom ] = useState({
        name: ""
    });

    const onChangeHandler = (e) => {
        setNewRoom({
            name: e.target.value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(newRoom.name !== ""){
            createHandler(newRoom);
            closeHandler();
            setNewRoom({
                name: ""
            });
        } else {
            alert("방 제목을 입력해주세요!");
        }
    }

    return (
        <div id="roomForm" className={open ? 'open' : null}>
            <form onSubmit={submitHandler}>
                <fieldset form="roomForm">
                    <legend>Room 생성</legend>
                    <input type="text" onChange={onChangeHandler} value={newRoom.name} />
                    <button>생성</button>
                </fieldset>
            </form>
        </div>
    )
}

export default MakeRoom;