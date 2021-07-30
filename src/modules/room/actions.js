export const CREATE_ROOM = "CREATE_ROOM";
export const DELETE_ROOM = "DELETE_ROOM";

export const createRoom = (room) => {
    return {
        type: CREATE_ROOM,
        payload: room
    }
}

export const deleteRoom = (room, id) => {
    console.log(room);
    const idx = room.findIndex((item) => {
        return item.roomId === id;
    })

    const newRoom = room;
    if(idx > -1) newRoom.splice(idx, 1);

    return {
        type: DELETE_ROOM,
        payload: newRoom
    }
}