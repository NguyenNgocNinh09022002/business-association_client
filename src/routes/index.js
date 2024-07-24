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
import Search from '../Pages/Search'
import Login from '../Components/FormLogin/index'

import Partners from '../Pages/Admin/Pages/Partners/index';
import Posts from '../Pages/Admin/Pages/Posts/Posts';
import EditPost from '../Pages/Admin/Pages/EditPost/EditPost';
import LayoutAdmin from '../Pages/Admin/Layout';


// Public routes
const publicRoutes = [
    { path: '/', component: Home },
   
    { path: '/giới-thiệu/giới-thiệu-chung', component: Introduce },
    { path: '/giới-thiệu/chức-năng-và-nhiệm-vụ', component: Misson },
    { path: '/giới-thiệu/ban-chấp-hành', component: Board },
    { path: '/giới-thiệu/cơ-cấu-tổ-chức', component: Organization },
    { path: '/giới-thiệu/điều-lệ', component: Rule },
    { path: '/giới-thiệu/các-đơn-vị-trực-thuộc', component: AffiliatedUnits },

    { path: '/sự-kiện/:slug', component: Events, layout: SidebarLayout,  },
    { path: '/sự-kiện/:type/:slug', component: EventsDetail, layout: SidebarLayout },

    { path: '/tìm-kiếm', component: Search, layout: SidebarLayout,  },

    { path: '/thành-viên', component: Members },
    { path: '/thành-viên/:slug', component: MemberDetail },
   
    { path: '/văn-bản/:slug', component: Document },
    { path: '/hỏi-đáp', component: Request },
    { path: '/liên-hệ', component: Contact },

    { path: '/login', component:  Login, layout: null},    
    { path: '/admin/partners', component: Partners, layout: LayoutAdmin },
    { path: '/admin/posts', component: Posts, layout: LayoutAdmin },
    { path: '/admin/posts/:id', component: EditPost, layout: LayoutAdmin },
    


];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
