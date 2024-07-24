import React, { useEffect, useState } from 'react';
import './MemberDetail.scss';
import { Link } from 'react-router-dom';
import img1 from '../../asset/image/member_img/member_img1.png';
import APIs from '../../APIs';

function MemberDetail() {
    const [memberData, setMemberData] = useState({});
    useEffect(()=>{
        const urlPath = decodeURI(document.location.pathname);
        APIs.getPartner(urlPath).then(data => setMemberData(data))
    },[])
    return (
        <div className="container">
            <div className="memberdetail">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>{memberData.name}</p>
                    </div>
                </div>
                <div className="member__header">
                    <h1>{memberData.name}</h1>
                </div>
                <div className="member__detail_content">
                    <div className="row ">
                        <div className="col l-4 m-12 c-12">
                            <div className="member_detail_img">
                                <img src={memberData.logo} alt="" />
                            </div>
                        </div>
                        <div className="col l-8 m-12 c-12" style={{ marginTop: 45 }}>
                        <div >
                                <div  className="member_detail_item">
                                    <span><b>Tên viết tắt:</b></span>
                                    <span style={{marginLeft:5}}>{memberData.shortName}</span>
                                </div>
                                <div  className="member_detail_item">
                                    <span><b>Địa chỉ: </b></span>
                                    <span style={{marginLeft:5}}>{memberData.address}</span>
                                </div>
                                <div  className="member_detail_item">
                                    <span><b>Người đại diện:</b></span>
                                    <span style={{marginLeft:5}}>{memberData.human?.name}</span>
                                </div>
                                <div  className="member_detail_item">
                                    <span><b>Chức vụ:</b></span>
                                    <span style={{marginLeft:5}}>{memberData.human?.role}</span>
                                </div>
                                <div  className="member_detail_item">
                                    <span><b>Điện thoại:</b></span>
                                    <a style={{marginLeft:5}}>{memberData.phone}</a>
                                </div>
                                <div  className="member_detail_item">
                                    <span><b>Email:</b></span>
                                    <a  style={{marginLeft:5}}>{memberData.email}</a>
                                </div>
                                <div  className="member_detail_item">
                                    <span><b>Website:</b></span>
                                    <a href={memberData.website} style={{marginLeft:5}}>{memberData.website}</a>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MemberDetail;
