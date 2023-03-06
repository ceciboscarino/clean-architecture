
import { keyUser, resetUser } from './../../redux/slices/user.slice';
import { clearLocalStorage } from '@/Utilities';
import { PublicRoutes } from './../../models/routes';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


export default function Logout() {

    const navigate = useNavigate();


    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(resetUser());
        navigate(PublicRoutes.LOGIN, { replace: true });
    }

    return <button onClick={logOut}>Log out</button>;

}
