import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { signIn, signOut } from '../modules/sign';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../firebase/init';

function useSign(){
    const user = useSelector((state) => state.sign);
    const dispatch = useDispatch();
    const db = getFirestore(app);

    const onSignIn = useCallback((user) => {

        async function getData(db){
            const col = collection(db, 'user');
            const snapshot = await getDocs(col);
            const list = snapshot.docs.map(doc => doc.data());
            const filterlist = list.filter(item => {
                return item.id == "jews333"
            })

            console.log(filterlist);
        }

        getData(db);

        //dispatch(signIn(user));
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