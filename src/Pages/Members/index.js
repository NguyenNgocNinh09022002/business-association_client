import './Members.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../asset/image/member_img/member_img1.png';
import img2 from '../../asset/image/member_img/member_img2.jpg';
import img3 from '../../asset/image/member_img/member_img3.jpg';
import img4 from '../../asset/image/member_img/member_img4.jpg';
import ScrollToTopButton from '../../Components/ScrollToTopButton';
import APIs from '../../APIs';



function Members() {
    const [visibleMembers, setVisibleMembers] = useState(10);
    const [memberData, setMemberData] = useState([])

    useEffect(()=>{
        APIs.getPartners().then((data)=> setMemberData(data))
    },[])

    const handleSeeMore = () => {
        setVisibleMembers((prev) => prev + 5);
    };

    return (
        <div className="container">
            <div className="member">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Thành viên</p>
                    </div>
                </div>
                <div className="contact__header">
                    <h2>Thành viên</h2>
                </div>
                <div className="member__content">
                    <div className="row">
                        {memberData.slice(0, visibleMembers).map((member, index) => (
                            <div className="col l-2-4 m-4 c-12 member__content_item" key={index}>
                                <div className="member__content_wrap">
                                    <Link to={'/thành-viên/'+member.slug}>
                                        <div className="member__content_wrap_img">
                                            <img src={member.logo} alt="" />
                                        </div>
                                        <div className="member__wrap">
                                            <h5 className="member__title">{member.name}</h5>
                                            <div className="member__btn">
                                                <button type="submit">Xem thêm</button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {visibleMembers < memberData.length && (
                    <div className="see__more" onClick={handleSeeMore}>
                        <h4>Xem thêm</h4>
                    </div>
                )}
            </div>
            <ScrollToTopButton />
        </div>
    );
}

export default Members;
