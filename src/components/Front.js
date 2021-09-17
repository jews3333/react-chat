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
    },[user]);

    const setCloseHandler = () => {
        setOpen(false);
    }

    const setDelRoomHandler = (id) => {
        if(window.confirm('정말 삭제하시겠습니까?')) {
            onDeleteRoom(room, id);

            props.history.push({
                pathname: props.match.path
            });
        }
    }

    return (
        <div id="front">
            <div className="front-info">
                <div>
                    <p>{user && user.id}</p>
                </div>
                <div>
                    <button onClick={() => setOpen(true)}>방만들기</button>
                    <MakeRoom createHandler={onCreateRoom} room={room} open={open} closeHandler={setCloseHandler} />
                </div>
            </div>
            <ul id="roomList">
                {
                    room.length > 0 ? room.map((e,i) => {
                        return (
                            <RoomItem key={i} room={e} deleteHandler={setDelRoomHandler} />
                        )
                    })
                    : <li className="no-room">참여 중인 방이 없습니다.</li>
                }
            </ul>
        </div>
    )
}

export default Front;