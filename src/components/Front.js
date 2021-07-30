import React, { useEffect, useState } from 'react';
import useSign from '../hooks/useSign';
import useRoom from '../hooks/useRoom';
import MakeRoom from './MakeRoom';
import RoomItem from './RoomItem';

function Front(props){
    const { user } = useSign();
    const { room, onCreateRoom, onDeleteRoom } = useRoom();
    const [ open, setOpen ] = useState(false);

    useEffect(() => {
        if(!user){
            props.history.push({
                pathname: "/"
            });
            return;
        }
    },[user, room]);

    const setCloseHandler = () => {
        setOpen(false);
    }

    const setDelRoomHandler = (id) => {
        onDeleteRoom(room, id);
    }

    return (
        <div id="front">
            <div className="front-info">
                <div>
                    <p>{user && user.username}</p>
                </div>
                <div>
                    <button onClick={() => setOpen(true)}>방만들기</button>
                    <MakeRoom createHandler={onCreateRoom} room={room} open={open} closeHandler={setCloseHandler} />
                </div>
            </div>
            <ul id="chatList">
                {
                    room && room.map((e,i) => {
                        return (
                            <RoomItem key={i} room={e} delRoomHandler={setDelRoomHandler} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Front;