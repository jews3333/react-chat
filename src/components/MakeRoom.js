import React, { useState } from 'react';

function MakeRoom(props){

    const { createHandler, closeHandler, room, open } = props;

    const [ newRoom, setNewRoom ] = useState([]);

    const onChangeHandler = (e) => {
        setNewRoom({
            roomNm: e.target.value,
            roomId: '1234'
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(newRoom){
            createHandler([...room, newRoom]);
            closeHandler();
            setNewRoom([]);
        }
    }

    return (
        <div id="roomForm" className={open ? 'open' : null}>
            <form onSubmit={submitHandler}>
                <fieldset form="roomForm">
                    <legend>Room 생성</legend>
                    <input type="text" onChange={onChangeHandler} value={newRoom.roomNm} />
                    <button>생성</button>
                </fieldset>
            </form>
        </div>
    )
}

export default MakeRoom;