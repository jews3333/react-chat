import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { createRoom, deleteRoom } from '../modules/room';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { app } from '../firebase/init';

function useRoom(){
    const room = useSelector((state) => state.room);
    const dispatch = useDispatch();
    const db = getFirestore(app);

    const onDispatchRoom = useCallback(async () => {

        const querySnapshot = await getDocs(query(collection(db, "room"), orderBy("date","desc")));

        let roomList = {};
        
        querySnapshot.forEach((doc) => {
            roomList[doc.id] = doc.data();
        });

        dispatch(createRoom(roomList));
    }, [dispatch]);

    const onCreateRoom = useCallback(async (room) => {

        await addDoc(collection(db, 'room'), {
            name: room.name,
            date: new Date()
        }).then(() => {
            alert("생성완료");
        });

        onDispatchRoom();
    }, [dispatch]);

    const onDeleteRoom = useCallback(async (id) => {
        await deleteDoc(doc(db, "room", id));
        
        onDispatchRoom();
    }, [dispatch]);

    return {
        room,
        onDispatchRoom,
        onCreateRoom,
        onDeleteRoom
    }
}

export default useRoom;