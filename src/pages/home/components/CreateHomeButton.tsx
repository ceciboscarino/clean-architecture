import { createUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";
import { serviceTemplate } from "../services/service-template";


export default function CreateHomeButton() {
    const dispatch = useDispatch()

    const dispatchAction =() => {
        
          dispatch (createUser(serviceTemplate));
    
        
      };
  return (
    <button onClick={dispatchAction}> Click </button>)
}