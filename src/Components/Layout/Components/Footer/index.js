import './Footer.scss';
import { Link } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { CgMail } from 'react-icons/cg';
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__content_about width__half width__mobile_footer">
                            <h3>
                                HIỆP HỘI DOANH NGHIỆP
                                <br /> TỈNH BÌNH DƯƠNG
                            </h3>
                            <ul>
                                <li>
                                    <CiLocationOn />
                                </li>
                                <li>Trung tâm chuyển đổi số tỉnh Bình Dương</li>
                            </ul>
                            <ul>
                                <li>
                                    <FiPhone />
                                </li>
                                <li>Liên hệ: (028) 3915 2459</li>
                            </ul>
                            <ul>
                                <li>
                                    <CgMail />
                                </li>
                                <li>vanphong@huba.vn</li>
                            </ul>
                            <ul>
                                <li>
                                    <CiLocationOn />
                                </li>
                                <li>Giấy phép xuất bản số 19/GP - STTTT cấp 13/020/2018</li>
                            </ul>
                        </div>
                        <div className="footer__content_widget width__half width__mobile_footer">
                            <h4>GIỚI THIỆU</h4>
                            <ul>
                                <li>
                                    <Link to="">Giới thiệu chung</Link>
                                </li>
                                <li>
                                    <Link to="">Sơ đồ tổ chức</Link>
                                </li>
                                <li>
                                    <Link to="">Quyết định thành lập</Link>
                                </li>
                                <li>
                                    <Link to="">Các đơn vị trực thuộc</Link>
                                </li>
                            </ul>
                            <div className="footer__content_member">
                                <h4>HỘI VIÊN</h4>
                                <ul>
                                    <li>
                                        <Link to="">Hội - Câu lạc bộ thành viên</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__content_widget width__half width__mobile_footer">
                            <h4>HOẠT ĐỘNG HIỆP HỘI</h4>
                            <ul>
                                <li>
                                    <Link to="">Diễn đàn kinh tế</Link>
                                </li>
                                <li>
                                    <Link to="">Danh hiệu doanh nghiệp xanh</Link>
                                </li>
                                <li>
                                    <Link to="">Chào mừng Ngày Doanh nhân Việt Nam 13/10</Link>
                                </li>
                                <li>
                                    <Link to="">Hội chợ - Triển lãm - Xúc tiến thương mại</Link>
                                </li>
                                <li>
                                    <Link to="">Doanh nhân vì cộng đồng</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__content_widget width__half width__mobile_footer">
                            <h4>Đăng ký nhận bản tin</h4>
                            <form action="#">
                                <div className="input__group">
                                    <input type="text" placeholder="Nhập email: " />
                                    <input type="text" placeholder="Nhập Họ tên: " />
                                    <button type="submit" className="button-submit">
                                        {' '}
                                        Đăng Kí{' '}
                                    </button>
                                </div>
                                <div className="footer__widget_social">
                                    <div>
                                        <AiOutlineFacebook />
                                    </div>
                                    <div>
                                        <AiOutlineInstagram />
                                    </div>
                                    <div>
                                        <AiOutlineLinkedin />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer__license">
                <div className="container">
                    <div className="footer__license_content">
                        <h5>© Bản quyền thuộc về TDMU | Hiệp hội doanh nghiệp Tỉnh Bình Dương.</h5>
                        <h5>Thiết kế và phát triển bởi Nhóm 2</h5>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;
