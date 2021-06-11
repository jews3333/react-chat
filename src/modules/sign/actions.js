export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const signIn = (id, password) => {
    return {
        type: SIGN_IN,
        payload: {
            id: id,
            password: password
        }
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
        payload: null
    }
}