import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { signIn, signOut } from '../modules/sign';

function useSign(){
    const user = useSelector((state) => state.sign);
    const dispatch = useDispatch();

    const onSignIn = useCallback((user) => {
        dispatch(signIn(user));
    }, [dispatch]);

    const onSignOut = useCallback(() => {
        dispatch(signOut());
    }, [dispatch]);

    return {
        user,
        onSignIn,
        onSignOut
    }
}

export default useSign;