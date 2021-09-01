export const CREATE_ROOM = "CREATE_ROOM";
export const DELETE_ROOM = "DELETE_ROOM";

export const createRoom = (room) => {
    return {
        type: CREATE_ROOM,
        payload: room
    }
}

export const deleteRoom = (room) => {
    return {
        type: DELETE_ROOM,
        payload: room
    }
}