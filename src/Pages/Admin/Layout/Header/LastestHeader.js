import './Header.scss';
import { useState, useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineMenu } from 'react-icons/ai';
import { LiaTimesSolid } from 'react-icons/lia';
import { ImSearch } from 'react-icons/im';
import {
    AiOutlineDownCircle,
    AiOutlineUpCircle,
    AiOutlineLinkedin,
    AiOutlineFacebook,
    AiOutlineInstagram,
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import img_logo from '../../../../asset/image/slider/Logobinhduong.png';
import apis from '../../../../APIs';

function Header() {
    const navMobileInputRef = useRef(null);
    const handleLinkClick = (menukey) => {
        const newMenus = [...menus];
        newMenus[menukey].isShowSubmenu = !newMenus[menukey].isShowSubmenu;
        setMenu(newMenus);
    };

    const handleChildLinkClick = () => {
        if (navMobileInputRef.current) {
            navMobileInputRef.current.checked = false;
        }
    };

    const handleParentLinkClick = (menu) => {
        if (!menu.childs && navMobileInputRef.current) {
            navMobileInputRef.current.checked = false;
        }
    };
    const [menus, setMenu] = useState([
        {
            name: 'Partners',
            slug: 'admin/partners',
            childs: [],
        },
        {
            name: 'Posts',
            slug: 'admin/posts',
            childs: [
                {
                    name: 'Edit Post',
                    slug: 'id',
                },
            ],
        },
    ]);

    return (
        <div className="header" style={{ display: 'block', position: 'unset' }}>
            <div className="container">
                <div className="header__content">
                    <label htmlFor="nav__mobile_input" className="nav__bars_btn">
                        <AiOutlineMenu />
                    </label>
                    <div className=" header__logo ">
                        <Link to="/">
                            <img src={img_logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="header__menu">
                        <ul>
                            {menus?.map((menu, menuKey) => (
                                <li key={menuKey}>
                                    <Link to={'/' + menu?.slug}>{menu?.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Nav menu MOBILE */}

                    <input
                        type="checkbox"
                        id="nav__mobile_input"
                        hidden
                        className="nav__input"
                        ref={navMobileInputRef}
                    />
                    <label htmlFor="nav__mobile_input" className="nav__overlay"></label>
                    <div className="nav__menu__wrap">
                        <label htmlFor="nav__mobile_input" className="nav__menu_close">
                            <LiaTimesSolid />
                        </label>
                        <div className="nav__menu_title">
                            <h2>Hiệp hội doanh nghiệp tỉnh Bình Dương</h2>
                        </div>
                        <div className="nav__menu">
                            <ul>
                                {menus.map((menu, menukey) => (
                                    <li key={menukey}>
                                        <Link
                                            to={'/' + menu?.slug}
                                            onClick={() => {
                                                handleLinkClick(menukey);
                                                handleParentLinkClick(menu);
                                            }}
                                        >
                                            {menu.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
