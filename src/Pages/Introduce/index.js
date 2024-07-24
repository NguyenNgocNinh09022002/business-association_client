import './Introduce.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import introduce__img from '../../asset/image/slider/introduce__img.webp';
import main__activity from '../../asset/image/slider/main_activity.png';
import ScrollToTopButton from '../../Components/ScrollToTopButton';

function Introduce() {
    return (
        <>
            <ScrollToTopButton />
            <div className="Introduce">
                <div className="container">
                    <div className="introduce__container">
                        <div className="header_left">
                            <div className="header_path">
                                <Link to="/">Trang chủ</Link>
                            </div>
                            <div className="vertical">
                                <p> | </p>
                            </div>
                            <div className="header_text">
                                <p>Giới thiệu</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l-6 m-12 c-12">
                            <div className="introduce__header">
                                <h1>Giới thiệu về Hiệp hội Doanh nghiệp tỉnh Bình Dương</h1>
                            </div>
                            <div className="introduce__wrap">
                                <div className="introduce__wrap_date">
                                    <MdOutlineCalendarToday />
                                    <p>12/07/2024</p>
                                </div>
                                <div className="introduce__wrap_feature">
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
                            <div className="introduce__text">
                                <p className="introduce__text_history">Lịch sử hình thành: </p>
                                <p>
                                    Hiệp hội Doanh nghiệp Thành phố Hồ Chí Minh (HUBA) được thành lập năm 1989, là một
                                    tổ chức xã hội nghề nghiệp, đại diện cho các doanh nghiệp đa thành phần kinh tế và
                                    đa ngành nghề đang hoạt động trên địa bàn thành phố, là “cầu nối” đại diện và bảo vệ
                                    quyền lợi hợp pháp của Hội viên HUBA trong các quan hệ kinh tế – xã hội với các tổ
                                    chức trong và ngoài nước, là đầu mối làm cầu nối trong mối quan hệ giữa các Hội viên
                                    với các cơ quan Đảng, Chính quyền, các cơ quan hữu quan, nhằm giải quyết các vấn đề
                                    có liên quan đến hoạt động sản xuất kinh doanh của doanh nghiệp trong khuôn khổ Pháp
                                    luật quy định.
                                    <br />
                                    Hiện nay toàn hệ thống HUBA có 73 tổ chức Hội thành viên tập thể (trong đó gồm 70
                                    Hội – Câu lạc bộ doanh nghiệp thành viên chính thức và 3 Hội viên liên kết) với hơn
                                    16.000 doanh nghiệp hội viên. Với phương châm hoạt động “Vì quyền lợi chính đáng của
                                    doanh nghiệp – Vì lợi ích của quốc gia – Vì uy tín đối với quốc tế – Vì xã hội và
                                    cộng đồng” khẩu hiệu hành động: “Đoàn kết – Đổi mới – Hợp tác – Phát triển” Hiệp hội
                                    ngày càng được sự quan tâm, tín nhiệm của các cơ quan, tổ chức trong và ngoài nước,
                                    đặc biệt là sự ủng hộ của cộng đồng doanh nghiệp.
                                </p>
                            </div>
                        </div>
                        <div className="col l-6 m-0 c-0">
                            <div className="banner__introduce">
                                <div className="banner__introduce_content">
                                    <div className="row">
                                        <div className="col l-4 m-0 c-0">
                                            <div className="banner__introduce_content_item">
                                                <h2 className="number"> 1989</h2>
                                                <h2 className="text">Thành lập</h2>
                                            </div>
                                        </div>
                                        <div className="col l-4 m-0 c-0">
                                            <div className="banner__introduce_content_item">
                                                <h2 className="number"> 73</h2>
                                                <h2 className="text">Hội thành viên tập thể</h2>
                                            </div>
                                        </div>
                                        <div className="col l-4 m-0 c-0">
                                            <div className="banner__introduce_content_item">
                                                <h2 className="number"> 16.000</h2>
                                                <h2 className="text"> Doanh nghiệp hội viên</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="introduce__img">
                    <h2>Ban Chấp hành Hiệp hội Doanh nghiệp TP.HCM nhiệm kỳ 2022 – 2027</h2>
                    <img src={introduce__img} alt="" />
                </div>
            </div>
            <div className="introduce__mission">
                <div className="container">
                    <h2 className="introduce__mission_title">Sứ mệnh</h2>
                    <div className="row">
                        <div className="col l-4 m-12 c-12">
                            <div className="introduce__mission_wrap">
                                <div className="introduce__mission_number">
                                    <h2>1</h2>
                                </div>
                                <div className="introduce__mission_text">
                                    <h2>Cung cấp các dịch vụ, tư vấn chất lượng hỗ trợ doanh nghiệp</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col l-4 m-12 c-12">
                            <div className="introduce__mission_wrap">
                                <div className="introduce__mission_number">
                                    <h2>2</h2>
                                </div>
                                <div className="introduce__mission_text">
                                    <h2>Đại diện và bảo vệ quyền lợi chính đáng của doanh nghiệp hội viên</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col l-4 m-12 c-12">
                            <div className="introduce__mission_wrap">
                                <div className="introduce__mission_number">
                                    <h2>3</h2>
                                </div>
                                <div className="introduce__mission_text">
                                    <h2>Đối thoại, phản biện chính sách, cải thiện môi trường kinh doanh</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="main__activity">
                    <h2>Các hoạt động chính</h2>
                    <img src={main__activity} alt="hoạt động chính" />
                </div>
            </div>
        </>
    );
}

export default Introduce;
