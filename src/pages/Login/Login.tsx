import { createUser, resetUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { AuthServices } from "./services";
import { PrivateRoutes, PublicRoutes } from '@/models';
import { useEffect } from "react";
import { clearLocalStorage } from '@/Utilities';

function login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


useEffect(() => {
  dispatch(resetUser());
  navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
}, []);





  const login = async () => {
    try {
      const result = await AuthServices;
      dispatch(createUser(result));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });

    } catch (error) { }
  }


  return (
    <div>
      <h2> Hola, logueate!!</h2>
      <button onClick={login}>Login</button>

    </div>
  );
}
export default login