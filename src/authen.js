import { Outlet, redirect } from "react-router-dom";
import { useMyContextProvider } from "./store";
import FormLogin from "./Components/FormLogin";
import LayoutLogin from "./Components/FormLogin/LayoutLogin";



const Authen = () => {
    const [controller, dispatch] = useMyContextProvider();
    if(!localStorage.getItem('hiephoidoanhnghiep.role')) {
        window.history.pushState('Login', 'Đăng nhập', '/admin/login')
        return (<LayoutLogin><FormLogin /></LayoutLogin>)
    }
    return (
        <Outlet />
    )
}
export default Authen;