import { createUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";


export default function CreateHomeButton() {
    const dispatch = useDispatch()

    const dispatchAction =() => {
        
          dispatch (createUser({ name: 'John Doe' , id: 1 }));
    
        
      };
  return (
    <button onClick={dispatchAction}> Click </button>)
}