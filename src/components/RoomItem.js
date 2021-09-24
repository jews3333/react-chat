import React from 'react';
import { Link } from 'react-router-dom';

function RoomItem(props){

    const { id, room, deleteHandler } = props;

    return (
        <li>
            <Link to={`/chat/${id}`}><span>{room.name}</span></Link>
            <button onClick={() => deleteHandler(id)}>삭제</button>
        </li>
    )
}

export default RoomItem;