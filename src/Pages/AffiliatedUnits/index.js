import React from 'react';
import './AffiliatedUnits.scss';
import { Link } from 'react-router-dom';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import { CiLocationOn, CiGlobe } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { CgMail } from 'react-icons/cg';

const unitsData = [
    {
        header: 'VĂN PHÒNG HIỆP HỘI DOANH NGHIỆP TP.HCM / OFFICE OF HCMC UNION OF BUSINESS ASSOCIATIONS',
        address: '22 Võ Văn Kiệt, Phường Nguyễn Thái Bình, Quận 1, TP. Hồ Chí Minh',
        phone: '(028) 3915 2473 – (028) 3915 2474 – (028) 3915 2475',
        email: 'vanphong@huba.vn',
        website: 'www.huba.vn',
    },
    {
        header: 'Trung tâm chuyển đổi số tỉnh bình dương',
        address: '36 Đ.Trịnh Hoài Đức, Phú Lợi, Thủ Dầu Một, Bình Dương',
        phone: '(028) 3915 2473 – (028) 3915 2474 – (028) 3915 2475',
        email: 'trungtamcdsbd@binhduong.gov.vn',
        website: 'ict.binhduong.gov.vn',
    },
    {
        header: 'Trung tâm Giám sát, Điều hành thông minh tỉnh Bình Dương',
        address: '36 Đ.Trịnh Hoài Đức, Phú Lợi, Thủ Dầu Một, Bình Dương',
        phone: '(028) 3915 2473 – (028) 3915 2474 – (028) 3915 2475',
        email: 'trungtamcdsbd@binhduong.gov.vn',
        website: 'ict.binhduong.gov.vn',
    },
    {
        header: 'Trung tâm Thông tin Điện tử',
        address: '36 Đ.Trịnh Hoài Đức, Phú Lợi, Thủ Dầu Một, Bình Dương',
        phone: '(028) 3915 2473 – (028) 3915 2474 – (028) 3915 2475',
        email: 'trungtamcdsbd@binhduong.gov.vn',
        website: 'ict.binhduong.gov.vn',
    },
];

function AffiliatedUnits() {
    return (
        <div className="container">
            <div className="units">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Đơn vị trực thuộc</p>
                    </div>
                </div>
                <div className="units__header">
                    <h1>Các đơn vị trực thuộc</h1>
                </div>
                <div className="units__wrap">
                    <div className="units__wrap_date">
                        <MdOutlineCalendarToday />
                        <p>12/07/2024</p>
                    </div>
                    <div className="units__wrap_feature">
                        <Link to="" title="Chia sẻ bài viết lên facebook">
                            <AiOutlineFacebook />
                        </Link>
                        <Link to="" title="Chia sẻ bài viết lên instagram">
                            <AiOutlineInstagram />
                        </Link>
                        <Link to="" title="Chia sẻ bài viết lên zalo">
                            <SiZalo />
                        </Link>
                    </div>
                </div>

                {unitsData.map((unit, index) => (
                    <div className="units__item" key={index}>
                        <div className="units__item_header">
                            <p>{unit.header}</p>
                        </div>
                        <div className="units__item_content">
                            <div className="units__item_content_wrap">
                                <CiLocationOn />
                                <p className="units__item_content_wrap_title">Trụ sở:</p>
                                <p className="units__item_content_wrap_text">{unit.address}</p>
                            </div>
                            <div className="units__item_content_wrap">
                                <FiPhone />
                                <p className="units__item_content_wrap_title">Điện thoại:</p>
                                <p className="units__item_content_wrap_text">{unit.phone}</p>
                            </div>
                            <div className="units__item_content_wrap">
                                <CgMail />
                                <p className="units__item_content_wrap_title">Email:</p>
                                <p className="units__item_content_wrap_text">{unit.email}</p>
                            </div>
                            <div className="units__item_content_wrap">
                                <CiGlobe />
                                <p className="units__item_content_wrap_title">Website:</p>
                                <Link to="" className="units__item_content_wrap_text">
                                    {unit.website}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AffiliatedUnits;
