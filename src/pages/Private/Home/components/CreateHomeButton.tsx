import { User } from "@/models";
import { createUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";
import { serviceTemplate, url } from "../services/service-template";


export default function CreateHomeButton() {
    const dispatch = useDispatch()

    const getService = async () => {
        const res: User = await serviceTemplate(url)
        return res
    }

    const dispatchAction = () => {
        getService()
            .then(response => dispatch(createUser(response)))



    };
    return (
        <button onClick={dispatchAction}> Click </button>)
}