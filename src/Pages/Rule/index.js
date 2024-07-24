import './Rule.scss';
import { Link } from 'react-router-dom';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import img_rule from '../../asset/image/slider/img_rule.png';
import ruleFile from '../../asset/file pdf/rule__file_pdf.pdf';

function Rule() {
    return (
        <div className="container">
            <div className="rule">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Điều lệ</p>
                    </div>
                </div>
                <div className="rule__header">
                    <h1>Điều lệ</h1>
                </div>
                <div className="rule__wrap">
                    <div className="rule__wrap_date">
                        <MdOutlineCalendarToday />
                        <p>12/07/2024</p>
                    </div>
                    <div className="rule__wrap_feature">
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
                <div className="rule__img">
                    <img src={img_rule} alt="Điều lệ" />
                </div>
                <div className="down__rule">
                    <p>Tải điều lệ đầy đủ tại đây: </p>
                    <a href={ruleFile} target="_blank" rel="noopener noreferrer">
                        Điều lệ hiệp hội doanh nghiệp
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Rule;
