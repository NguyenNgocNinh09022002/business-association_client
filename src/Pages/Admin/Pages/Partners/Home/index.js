import { useMyContextProvider } from '../../../../../store';
import PartnersContainer from './PartnerContainer/PartnerContainer';
import Side from './Side';



const Posts = () => {
    let pathArr = document.location.pathname.split('/');
    let type = pathArr[pathArr.length-1];
    if(type != 'pending' && type != 'accepting' && type != 'excecuting') {
        type = 'public';
    }

    const [controller, dispatch] = useMyContextProvider();
    return  (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px' }}>
            <Side />
            <PartnersContainer type={type} />
        </div>
    );
};

export default Posts;
