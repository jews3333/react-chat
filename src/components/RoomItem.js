import React from 'react';
import { Link } from 'react-router-dom';

function RoomItem(props){

    const { room, delRoomHandler } = props;

    return (
        <li>
            <Link to={`/chat/${room.roomId}`}><span>{room.roomNm}</span></Link>
            <button onClick={() => delRoomHandler(room.roomId)}>삭제</button>
        </li>
    )
}

export default RoomItem;