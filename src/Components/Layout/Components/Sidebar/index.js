import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import img_sidebar from '../../../../asset/image/slider/sidebar_img.jpg';

const categories = [
    'Các hoạt động Thể thao-Văn hóa',
    'Các hoạt động Thể thao-Văn hóa',
    'Các hoạt động Thể thao-Văn hóa hoạt động Thể thao-Văn hóa Các hoạt động Thể',
    'Các hoạt động Thể thao-Văn hóa',
    'Các hoạt động Thể thao-Văn hóa Các hoạt động Thể thao-Văn hóa',
    'Các hoạt động Thể thao-Văn hóa',
    'Các hoạt động Thể thao-Văn hóa',
    'Các hoạt động Thể thao-Văn hóa',
    'Các hoạt động Thể thao-Văn hóa hoạt động Thể thao-Văn hóa Các hoạt động Thể',
];

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="category">
                <h3 className="category__heading">Thể loại</h3>
                <div className="category__list">
                    {categories.map((category, index) => (
                        <ul className="category_item" key={index}>
                            <li className="category_icon">
                                <IoIosArrowRoundForward />
                            </li>
                            <li>
                                <Link to="">{category}</Link>
                            </li>
                        </ul>
                    ))}
                </div>
            </nav>
            <div className="img_sidebar">
                <img src={img_sidebar} alt="" />
            </div>
        </aside>
    );
}

export default Sidebar;
