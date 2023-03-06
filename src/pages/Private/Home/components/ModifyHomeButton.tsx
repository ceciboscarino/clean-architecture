import { modifyUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";


export default function ModifyHomeButton() {
    const dispatch = useDispatch()

    const dispatchAction =() => {
        
          dispatch (modifyUser({ name: 'Gentleman' , id: 1 }));
    
        
      };
  return (
    <button onClick={dispatchAction}> Click modify </button>)
}