import LastestHeader from './Header/LastestHeader';
import SideBar from './SideBar';
const LayoutAdmin = ({ children }) => {
    return (
        <div >
            <LastestHeader />

            <div style={{ marginTop: '100px'}} >
                {children}
            </div>
        </div>
    );
};
export default LayoutAdmin;
