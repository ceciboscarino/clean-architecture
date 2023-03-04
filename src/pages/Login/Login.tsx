import { createUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux"
import { AuthServices } from "./services";

function login() {
  const dispatch = useDispatch();
  const login = async () => {
    try{
        const result = await AuthServices;
        dispatch (createUser(result));

    }catch (error) {}
  }
  
  
    return (
    <div>
        <h2> Hola, logueate!!</h2>
        <button onClick={login}>Login</button>

    </div>
  );
}
export default login