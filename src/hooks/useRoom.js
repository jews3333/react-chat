import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { createRoom, deleteRoom } from '../modules/room';

function useRoom(){
    const room = useSelector((state) => state.room);
    const dispatch = useDispatch();

    const onCreateRoom = useCallback((room) => {
        dispatch(createRoom(room));
    }, [dispatch]);

    const onDeleteRoom = useCallback((room, id) => {
        dispatch(deleteRoom(room, id));
    }, [dispatch]);

    return {
        room,
        onCreateRoom,
        onDeleteRoom
    }
}

export default useRoom;