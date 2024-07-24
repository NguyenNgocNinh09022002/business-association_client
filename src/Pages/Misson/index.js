import React, { useState } from 'react';
import './Misson.scss';
import { Link } from 'react-router-dom';
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { AiOutlineFacebook } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import slider5 from '../../asset/image/slider/slide5.jpg';
import ScrollToTopButton from '../../Components/ScrollToTopButton';

function Misson() {
    const [fontSize, setFontSize] = useState(16); // Default font size

    const increaseFontSize = () => {
        setFontSize((prevSize) => prevSize + 2);
    };
    const decreaseFontSize = () => {
        setFontSize((prevSize) => (prevSize > 10 ? prevSize - 2 : prevSize)); // Minimum font size of 10
    };
    const resetFontSize = () => {
        setFontSize(16);
    };
    const lineHeight = `${fontSize * 2}px`;
    return (
        <div className="container">
            <ScrollToTopButton />
            <div className="Misson">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Chức năng và nhiệm vụ</p>
                    </div>
                </div>
                <div className="misson__header">
                    <h1>Chức năng và nhiệm vụ</h1>
                </div>
                <div className="misson__wrap">
                    <div className="misson__wrap_date">
                        <MdOutlineCalendarToday />
                        <p>12/07/2024</p>
                    </div>
                    <div className="misson__wrap_feature">
                        <p className="misson__wrap_feature_font_size">Cỡ chữ: </p>
                        <p className="font_minus" onClick={decreaseFontSize} title="giảm cỡ chữ">
                            A-
                        </p>
                        <p className="font__default" onClick={resetFontSize} title="cỡ chữ mặc định">
                            A
                        </p>
                        <p className="font__plus" onClick={increaseFontSize} title="tăng cỡ chữ">
                            A+
                        </p>
                        <Link to="" title="Chia sẻ bài viết lên facebook">
                            <AiOutlineFacebook />
                        </Link>
                        <Link to="" title="Chia sẻ bài viết lên zalo">
                            <SiZalo />
                        </Link>
                        <Link to="" title="Đọc bài viết">
                            <HiMiniSpeakerWave />
                        </Link>
                    </div>
                </div>
                <div className="misson__content" style={{ fontSize: `${fontSize}px`, lineHeight }}>
                    <div className="misson__content_title">
                        <p>A. Chức năng của hiệp hội doanh nghiệp:</p>
                    </div>
                    <div className="misson__content_text">
                        <p>
                            1. Đại diện cho cộng đồng doanh nghiệp: Thay mặt các doanh nghiệp thành viên trong việc bảo
                            vệ quyền lợi và lợi ích hợp pháp trước cơ quan chính quyền và các tổ chức khác. Tham gia vào
                            việc xây dựng, sửa đổi và hoàn thiện các chính sách, luật pháp liên quan đến hoạt động kinh
                            doanh.
                        </p>
                        <p>
                            2. Hỗ trợ doanh nghiệp: Cung cấp thông tin, tư vấn về thị trường, pháp luật, kỹ thuật và
                            công nghệ. Tổ chức các hoạt động đào tạo, hội thảo, triển lãm, xúc tiến thương mại nhằm nâng
                            cao năng lực cạnh tranh của doanh nghiệp.
                        </p>
                        <p>
                            3. Xúc tiến thương mại và đầu tư: Hỗ trợ doanh nghiệp tìm kiếm đối tác, mở rộng thị trường
                            trong và ngoài nước. Tham gia và tổ chức các sự kiện, hội chợ, triển lãm, diễn đàn kinh
                            doanh để thúc đẩy hoạt động xúc tiến thương mại và đầu tư.
                        </p>
                        <p>
                            4. Kết nối và hợp tác: Tạo diễn đàn giao lưu, kết nối giữa các doanh nghiệp, doanh nhân để
                            chia sẻ kinh nghiệm, hợp tác phát triển. Thiết lập mối quan hệ với các tổ chức hiệp hội,
                            doanh nghiệp quốc tế để mở rộng cơ hội hợp tác.
                        </p>
                    </div>
                    <div className="misson__banner">
                        <img src={slider5} alt="" />
                    </div>
                    <div className="misson__content_title">
                        <p>B. Nhiệm vụ của hiệp hội doanh nghiệp:</p>
                    </div>
                    <div className="misson__content_text">
                        <p>
                            1. Bảo vệ quyền lợi hợp pháp của hội viên: Phản ánh, đề xuất, kiến nghị các chính sách, biện
                            pháp nhằm tạo môi trường kinh doanh thuận lợi cho doanh nghiệp. Bảo vệ quyền lợi và lợi ích
                            hợp pháp của các doanh nghiệp thành viên trước những bất công, vi phạm từ phía cơ quan nhà
                            nước hoặc tổ chức khác.
                        </p>
                        <p>
                            2.Hỗ trợ hội viên nâng cao năng lực: Tổ chức các khóa đào tạo, hội thảo, chương trình nâng
                            cao kỹ năng quản lý, kỹ năng chuyên môn cho doanh nghiệp. Tư vấn và hỗ trợ các doanh nghiệp
                            trong việc cải tiến công nghệ, nâng cao chất lượng sản phẩm, dịch vụ.
                        </p>
                        <p>
                            3. Xúc tiến thương mại và mở rộng thị trường: Hỗ trợ doanh nghiệp tiếp cận, mở rộng thị
                            trường trong nước và quốc tế. Tổ chức các sự kiện xúc tiến thương mại, đầu tư, kết nối doanh
                            nghiệp với các đối tác tiềm năng.
                        </p>
                        <p>
                            4. Phát triển mối quan hệ hợp tác: Xây dựng mối quan hệ hợp tác với các hiệp hội, tổ chức
                            doanh nghiệp trong và ngoài nước. Tạo điều kiện cho các doanh nghiệp thành viên tham gia các
                            chương trình hợp tác quốc tế, hội nhập kinh tế toàn cầu.
                        </p>
                        <p>
                            5. Tăng cường thông tin và truyền thông: Cung cấp thông tin kịp thời về chính sách, thị
                            trường, xu hướng kinh doanh cho các doanh nghiệp thành viên. Phát hành các ấn phẩm, bản tin,
                            báo cáo nghiên cứu, tạp chí liên quan đến hoạt động kinh doanh.
                        </p>
                        <p>
                            6. Thúc đẩy trách nhiệm xã hội của doanh nghiệp: Khuyến khích và hỗ trợ các doanh nghiệp
                            tham gia các hoạt động từ thiện, bảo vệ môi trường, đóng góp vào sự phát triển bền vững của
                            cộng đồng. Tuyên truyền, nâng cao nhận thức về trách nhiệm xã hội trong kinh doanh cho các
                            doanh nghiệp.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Misson;
