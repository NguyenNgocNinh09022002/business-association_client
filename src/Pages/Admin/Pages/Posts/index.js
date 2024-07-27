import { useMyContextProvider } from '../../../../store';
import PostsContainer from './PostContainer/PostContainer';
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
            <PostsContainer type={type} />
        </div>
    );
};

export default Posts;
