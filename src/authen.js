import { Outlet, redirect } from "react-router-dom";
import { useMyContextProvider } from "./store";
import FormLogin from "./Components/FormLogin";



const Authen = () => {
    const [controller, dispatch] = useMyContextProvider();
    if(controller.user) return (<Outlet />)
    return (
        <FormLogin />
    )
}
export default Authen;