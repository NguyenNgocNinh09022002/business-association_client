import './Organization.scss';
import { Link } from 'react-router-dom';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
import img__organization from '../../asset/image/slider/img_organization.png';

function Organization() {
    return (
        <div className="container">
            <div className="organization">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Cơ cấu tổ chức</p>
                    </div>
                </div>
                <div className="organization__header">
                    <h1>Cơ cấu tổ chức</h1>
                </div>
                <div className="organization__wrap">
                    <div className="organization__wrap_date">
                        <MdOutlineCalendarToday />
                        <p>12/07/2024</p>
                    </div>
                    <div className="organization__wrap_feature">
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
                <div className="organization__img">
                    <img src={img__organization} alt="Cơ cấu tổ chức" />
                </div>
            </div>
        </div>
    );
}

export default Organization;
