import { Outlet, redirect } from "react-router-dom";
import { useMyContextProvider } from "./store";


const Authen = () => {
    const [controller, dispatch] = useMyContextProvider();
    if(controller.user) return (<Outlet />)
    return (<>Note admin</>)
}
export default Authen;