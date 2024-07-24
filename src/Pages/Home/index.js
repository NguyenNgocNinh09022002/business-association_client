import React from 'react';
import './Home.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ScrollToTopButton from '../../Components/ScrollToTopButton';

import { Link } from 'react-router-dom';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { SiNbc } from 'react-icons/si';

import slider4 from '../../asset/image/slider/slide4.jpg';
import slider5 from '../../asset/image/slider/slide5.jpg';
import slider6 from '../../asset/image/slider/slide6.jpg';
import img_news from '../../asset/image/news/img_news.webp';
import img_news2 from '../../asset/image/news/img_news2.webp';
import img_news3 from '../../asset/image/news/img_news3.webp';
import img_event from '../../asset/image/slider/img_home_event.webp';
import img_event2 from '../../asset/image/slider/img_home_event2.webp';
import img_event3 from '../../asset/image/slider/img_home_event3.webp';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', borderRadius: '50%' }} onClick={onClick} />;
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'block', borderRadius: '50%' }} onClick={onClick} />;
};

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    const settings_news = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const newsItems = [
        {
            title: 'Báo cáo tình hình doanh nghiệp TPHCM Quý II năm 2024 doanh nghiệp TPHCM Quý II năm 2024',
            text: 'Năng lượng xanh, thường được gọi là năng lượng tái tạo hoặc bền vững, được gọi là năng lượng tái tạo hoặc bền vững',
            date: '12/07/2024',
            img: img_news,
        },
        {
            title: 'Ngân hàng xanh: Tài chính cho tương lai bền vững',
            text: 'Ngân hàng xanh là gì? Ngân hàng xanh là các tổ chức tài chính sử dụng',
            date: '12/07/2024',
            img: img_news2,
        },
        {
            title: 'Năng lượng xanh là gì? Lợi ích năng lượng xanh mang lại',
            text: 'Năng lượng xanh, thường được gọi là năng lượng tái tạo hoặc bền vững, được...					',
            date: '12/07/2024',
            img: img_news3,
        },
        {
            title: 'Báo cáo tình hình doanh nghiệp TPHCM Quý II năm 2024 doanh nghiệp TPHCM Quý II năm 2024',
            text: 'Năng lượng xanh, thường được gọi là năng lượng tái tạo hoặc bền vững, được gọi là năng lượng tái tạo hoặc bền vững',
            date: '12/07/2024',
            img: img_news,
        },
        {
            title: 'Ngân hàng xanh: Tài chính cho tương lai bền vững',
            text: 'Ngân hàng xanh là gì? Ngân hàng xanh là các tổ chức tài chính sử dụng',
            date: '12/07/2024',
            img: img_news2,
        },
        {
            title: 'Năng lượng xanh là gì? Lợi ích năng lượng xanh mang lại',
            text: 'Năng lượng xanh, thường được gọi là năng lượng tái tạo hoặc bền vững, được...					',
            date: '12/07/2024',
            img: img_news3,
        },
    ];

    return (
        <div className="Home_page">
            <div className="slider">
                <Slider {...settings}>
                    <div>
                        <img src={slider4} alt="Slider 1" />
                    </div>
                    <div>
                        <img src={slider5} alt="Slider 2" />
                    </div>
                    <div>
                        <img src={slider4} alt="Slider 3" />
                    </div>
                    <div>
                        <img src={slider6} alt="Slider 4" />
                    </div>
                </Slider>
            </div>
            <div className="container">
                <div className="Home__introduce">
                    <div className="Home__introduce_header">
                        <h1>Giới thiệu</h1>
                    </div>
                    <div className="Home__introduce_text">
                        <p>
                            Hiệp hội Doanh nghiệp Thành phố Hồ Chí Minh (HUBA) được thành lập năm 1989, là một tổ chức
                            xã hội nghề nghiệp, đại diện cho các doanh nghiệp đa thành phần kinh tế và đa ngành nghề
                            đang hoạt động trên địa bàn thành phố, là “cầu nối” đại diện và bảo vệ quyền lợi hợp pháp
                            của Hội viên HUBA trong các quan hệ kinh tế – xã hội với các tổ chức trong và ngoài nước
                        </p>
                    </div>
                    <Link to="/gioi-thieu">Xem thêm</Link>

                    <div className="banner__introduce">
                        <div className="banner__introduce_content">
                            <div className="row">
                                <div className="col l-4 m-4 ">
                                    <div className="banner__introduce_content_item">
                                        <h2 className="number"> 1989</h2>
                                        <h2 className="text"> Thời gian thành lập</h2>
                                    </div>
                                </div>
                                <div className="col l-4 m-4">
                                    <div className="banner__introduce_content_item">
                                        <h2 className="number"> 73</h2>
                                        <h2 className="text"> Tổ chức Hội thành viên tập thể</h2>
                                    </div>
                                </div>
                                <div className="col l-4 m-4">
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
            <div className="home__news">
                <div className="container">
                    <div className="home__news_header">
                        <h1>Tin tức</h1>
                    </div>
                    <div className="home__news_content">
                        <Slider {...settings_news}>
                            {newsItems.map((item, index) => (
                                <div key={index}>
                                    <Link to="">
                                        <div className="home__news_content_item">
                                            <div className="home__news_content_item_img">
                                                <img src={item.img} alt={item.title} />
                                            </div>
                                            <div className="home__news_content_item_boxtext">
                                                <div className="home__news_content_item_title">
                                                    <h4>{item.title}</h4>
                                                </div>
                                                <div className="home__news_content_item_text">
                                                    <p>{item.text}</p>
                                                </div>
                                                <div className="home__news_content_item_footer">
                                                    <div className="home__news_content_item_footer_date">
                                                        <MdOutlineCalendarToday />
                                                        <p>{item.date}</p>
                                                    </div>
                                                    <div className="home__news_content_item_seemore">Xem thêm</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="home__banner">
                <img src={slider6} alt="" />
            </div>
            <div className="home__event">
                <div className="container">
                    <div className="home__event_header">
                        <h1>Sự kiện thường niên</h1>
                    </div>
                    <div className="home__event_content">
                        <div className="row">
                            <div className="col l-4 m-12 c-12 event__center">
                                <div className="home__event_content_wrap">
                                    <img src={img_event} alt="" className="home__event_content_img" />
                                    <div className="home__event_content_box">
                                        <div className="home__event_icon">
                                            <div className="home__event_icon_inner">
                                                <SiNbc />
                                            </div>
                                        </div>
                                        <div className="home__event_content_title">
                                            <h3>Cuộc bình chọn doanh nhân, doanh nghiệp tiêu biểu</h3>
                                        </div>
                                        <Link to="">
                                            <button type="submit">Xem chi tiết</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-4 m-12 c-12 event__center">
                                <div className="home__event_content_wrap">
                                    <img src={img_event2} alt="" className="home__event_content_img" />
                                    <div className="home__event_content_box">
                                        <div className="home__event_icon">
                                            <div className="home__event_icon_inner">
                                                <SiNbc />
                                            </div>
                                        </div>
                                        <div className="home__event_content_title">
                                            <h3>cuộc bình chọn sản phẩm dịch vụ tiêu biểu</h3>
                                        </div>
                                        <Link to="">
                                            <button type="submit">Xem chi tiết</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-4 m-12 c-12 event__center">
                                <div className="home__event_content_wrap">
                                    <img src={img_event3} alt="" className="home__event_content_img" />
                                    <div className="home__event_content_box">
                                        <div className="home__event_icon">
                                            <div className="home__event_icon_inner">
                                                <SiNbc />
                                            </div>
                                        </div>
                                        <div className="home__event_content_title">
                                            <h3> cuộc bình chọn danh hiệu doanh nghiệp xanh</h3>
                                        </div>
                                        <Link to="">
                                            <button type="submit">Xem chi tiết</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__banner">
                <img src={slider5} alt="" />
            </div>
            <ScrollToTopButton />
        </div>
    );
}

export default Home;
