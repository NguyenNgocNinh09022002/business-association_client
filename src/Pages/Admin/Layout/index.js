import LastestHeader from './Header/LastestHeader';
import SideBar from './SideBar';
const LayoutAdmin = ({ children }) => {
    return (
        <div>
            <LastestHeader></LastestHeader>

            <div style={{ flexDirection: 'row', marginTop: 100 }}>
                <SideBar />
                <div>{children}</div>
            </div>
        </div>
    );
};
export default LayoutAdmin;
