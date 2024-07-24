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
import apis from '../../../../APIs/index';

function Header() {
    const navMobileInputRef = useRef(null);
    const [searchStr, setSearchStr] = useState('');
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
    const [menus, setMenu] = useState([]);

    useEffect(() => {
        apis.getMenu()
            .then((data) => {
                setMenu(data);
            })
            .catch((err) => alert(err));
    }, []);

    return (
        <div className="header">
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
                                    <Link to={menu.childs.length > 0 ? null : '/' + menu?.slug}>
                                        {menu?.name}
                                        {menu.childs.length > 0 && <AiOutlineDown className="icon_down" />}
                                    </Link>
                                    {menu.childs && (
                                        <ul className="header__menu_dropdown">
                                            {menu.childs.map((childItem, childKey) => (
                                                <li
                                                    key={`${menuKey}-${childKey}`}
                                                    className="header__menu_dropdown_child"
                                                >
                                                    <Link to={'/' + menu.slug + '/' + childItem.slug} reloadDocument>
                                                        {childItem.name}{' '}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="search ">
                        <ul>
                            <li>
                                <ImSearch className="icon_search" />
                                <form action={`/tìm-kiếm?${searchStr}`} method='GET' className="input_search">
                                    <input
                                        value={searchStr}
                                        onInput={(event) => {
                                            setSearchStr(event.value);
                                        }}
                                        name="q"
                                        type="text"
                                        placeholder="Tìm kiếm... "
                                    />
                                    <button type='submit' className="button_submit">
                                        {' '}
                                        Search{' '}
                                    </button>
                                </form>
                            </li>
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
                                             to={menu.childs.length > 0 ? null : '/' + menu?.slug}
                                            onClick={() => {
                                                handleLinkClick(menukey);
                                                handleParentLinkClick(menu);
                                            }}
                                        >
                                            {menu.name}
                                            {menu.childs.length > 0 &&
                                                (menu.isShowSubmenu ? <AiOutlineDownCircle /> : <AiOutlineUpCircle />)}
                                        </Link>
                                        {menu.childs && (
                                            <ul
                                                className={`header__menu_dropdown ${
                                                    menu.isShowSubmenu ? 'show__submenu' : ''
                                                }`}
                                            >
                                                {menu.childs.map((childItem, childKey) => (
                                                    <li key={`${menukey}-${childKey}`}>
                                                        <Link to={'/' + menu.slug + '/' + childItem.slug} onClick={handleChildLinkClick}>
                                                            {childItem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="nav__menu_social">
                            <Link to={''}>
                                <AiOutlineFacebook />{' '}
                            </Link>

                            <Link to={''}>
                                <AiOutlineInstagram />
                            </Link>

                            <Link to={''}>
                                <AiOutlineLinkedin />
                            </Link>
                        </div>
                        <div className="nav__menu_contact">
                            <ul>
                                <li>
                                    <MdEmail /> TDMU@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
