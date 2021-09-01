import React from 'react';
import { Link } from 'react-router-dom';

function RoomItem(props){

    const { room, deleteHandler } = props;

    return (
        <li>
            <Link to={`/chat/${room.roomId}`}><span>{room.roomNm}</span></Link>
            <button onClick={() => deleteHandler(room.roomId)}>삭제</button>
        </li>
    )
}

export default RoomItem;