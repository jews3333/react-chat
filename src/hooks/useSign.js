import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { signIn, signOut } from '../modules/sign';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { app } from '../firebase/init';

function useSign(){
    const user = useSelector((state) => state.sign);
    const dispatch = useDispatch();
    const db = getFirestore(app);

    const onSignIn = useCallback(async (user) => {

        const querySnapshot = await getDocs(query(collection(db, "user"), where("id","==", user.id), where("password","==",user.password)));
        
        if(querySnapshot.size){
            querySnapshot.forEach((doc) => {
                dispatch(signIn(doc.data()));
            });
        } else {
            alert("아이디나 패스워드가 틀립니다.");
        }
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