import SidebarLayout from '../Components/Layout/SidebarLayout';

import Home from '../Pages/Home';
import Events from '../Pages/Events';
import Members from '../Pages/Members';
import Contact from '../Pages/Contact';
import Introduce from '../Pages/Introduce';
import MemberDetail from '../Pages/MemberDetail';
import EventsDetail from '../Pages/EventsDetail';
import Board from '../Pages/Board';
import AffiliatedUnits from '../Pages/AffiliatedUnits';
import Organization from '../Pages/Organization';
import Rule from '../Pages/Rule';
import Document from '../Pages/Document';
import Request from '../Pages/Request';
import Misson from '../Pages/Misson';
import Search from '../Pages/Search';
import Login from '../Components/FormLogin/index';

import Partners from '../Pages/Admin/Pages/Partners/Home/index';
import EditPartner from '../Pages/Admin/Pages/Partners/EditPartner/EditPartner';
import AddPartner from '../Pages/Admin/Pages/Partners/AddPartner/AddPartner';



import LayoutAdmin from '../Pages/Admin/Layout';
import LayoutAction from '../Pages/Admin/Layout/action';
import Posts from '../Pages/Admin/Pages/Posts/Home/index';
import EditPost from '../Pages/Admin/Pages/Posts/EditPost/EditPost';
import AddPost from '../Pages/Admin/Pages/Posts/AddPost/AddPost';
import Authen from '../authen';

import Users from '../Pages/Admin/Pages/Users/Home/index'
import AddUser from '../Pages/Admin/Pages/Users/AddUser/index'
import EditUser from '../Pages/Admin/Pages/Users/EditUser';
import FormLogin from '../Components/FormLogin/index';
import LayoutLogin from '../Components/FormLogin/LayoutLogin'

// Public routes
const publicRoutes = [
    

    { path: '/', component: Home },

    { path: '/giới-thiệu/giới-thiệu-chung', component: Introduce },
    { path: '/giới-thiệu/chức-năng-và-nhiệm-vụ', component: Misson },
    { path: '/giới-thiệu/ban-chấp-hành', component: Board },
    { path: '/giới-thiệu/cơ-cấu-tổ-chức', component: Organization },
    { path: '/giới-thiệu/điều-lệ', component: Rule },
    { path: '/giới-thiệu/các-đơn-vị-trực-thuộc', component: AffiliatedUnits },

    { path: '/sự-kiện/:slug', component: Events, layout: SidebarLayout },
    { path: '/sự-kiện/:type/:slug', component: EventsDetail, layout: SidebarLayout },

    { path: '/tìm-kiếm', component: Search, layout: SidebarLayout },

    { path: '/thành-viên', component: Members },
    { path: '/thành-viên/:slug', component: MemberDetail },

    { path: '/văn-bản/:slug', component: Document },
    { path: '/hỏi-đáp', component: Request },
    { path: '/liên-hệ', component: Contact },

    { path: '/login', component: Login, layout: null },

    {
        path: '/admin',
        component: Authen,
        Children: [
            // { path: '/admin/partners', component: Partners, layout: LayoutAdmin },

            { path: '/admin/partners/edit/:id', component: EditPartner, layout: LayoutAction },
            { path: '/admin/partners/add', component: AddPartner, layout: LayoutAction },
            { path: '/admin/partners/pending', component: Partners, layout: LayoutAdmin },
            { path: '/admin/partners/:type', component: Partners, layout: LayoutAdmin },
            { path: '/admin/partners/', component: Partners, layout: LayoutAdmin },
            
            { path: '/admin/posts/edit/:id', component: EditPost, layout: LayoutAction },
            { path: '/admin/posts/add', component: AddPost, layout: LayoutAction },
            { path: '/admin/posts/pending', component: Posts, layout: LayoutAdmin },
            { path: '/admin/posts/:type', component: Posts, layout: LayoutAdmin },
            { path: '/admin/posts/', component: Posts, layout: LayoutAdmin },

            { path: '/admin/users/', component: Users , layout: LayoutAdmin},
            { path: '/admin/users/add', component: AddUser, layout: LayoutAdmin},
            { path: '/admin/users/edit/:id', component: EditUser, layout: LayoutAdmin},
            { path: '/admin/login', component: FormLogin, layout: LayoutLogin}
        ],
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
