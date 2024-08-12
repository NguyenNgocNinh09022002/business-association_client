import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import img_sidebar from '../../../../asset/image/slider/sidebar_img.jpg';
import { useEffect, useState } from 'react';
import APIs from '../../../../APIs';

function Sidebar() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        APIs.getMenu().then((data) => {
            setCategories(data);
        });
    }, []);
    return (
        <aside className="sidebar">
            <nav className="category">
                <h3 className="category__heading">Thể loại</h3>
                <div className="category__list">
                    {categories.map((category, index) =>
                        category.childs.length > 0 ? (
                            <>
                                {category.childs.map((item) => (
                                    <ul className="category_item" key={index}>
                                        <li className="category_icon">
                                            <IoIosArrowRoundForward />
                                        </li>
                                        <li>
                                            <Link to={`/${category.slug}/${item.slug}`}>{item.name}</Link>
                                        </li>
                                    </ul>
                                ))}
                            </>
                        ) : (
                            <ul className="category_item" key={index}>
                                <li className="category_icon">
                                    <IoIosArrowRoundForward />
                                </li>
                                <li>
                                    <Link to={`/${category.slug}`}>{category.name}</Link>
                                </li>
                            </ul>
                        ),
                    )}
                </div>
            </nav>
            <div className="img_sidebar">
                <img src={img_sidebar} alt="" />
            </div>
        </aside>
    );
}

export default Sidebar;
