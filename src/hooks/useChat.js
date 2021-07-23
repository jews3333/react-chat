import { useSelector } from 'react-redux';

function useSign(){
    const user = useSelector((state) => state.sign);

    return {
        user
    }
}

export default useSign;