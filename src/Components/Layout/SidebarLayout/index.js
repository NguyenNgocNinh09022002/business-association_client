import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
import './SidebarLayout.scss';

import React from 'react';
import Slider from 'react-slick';
import banner1 from '../../../asset/image/slider/banner1.png';
import banner2 from '../../../asset/image/slider/banner2.png';
import banner3 from '../../../asset/image/slider/banner3.jpg';
import img_business1 from '../../../asset/image/business_img/business1.png';
import img_business2 from '../../../asset/image/business_img/business2.png';
import img_business3 from '../../../asset/image/business_img/business3.png';
import img_business4 from '../../../asset/image/business_img/business4.png';
import img_business5 from '../../../asset/image/business_img/business5.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SidebarLayout({ children }) {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 736,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col l-9 m-12 c-12">
                        <div className="content">{children}</div>
                    </div>
                    <div className="col l-3 m-0 c-0">
                        <Sidebar />
                    </div>
                </div>
                <div className="banner">
                    <div className="row">
                        <div className="col l-4 m-4 c-12">
                            <img src={banner1} alt="banner" className="banner_pic" />
                        </div>
                        <div className="col l-4 m-4 c-12">
                            <img src={banner2} alt="banner" className="banner_pic" />
                        </div>
                        <div className="col l-4 m-4 c-12">
                            <img src={banner3} alt="banner" className="banner_pic" />
                        </div>
                    </div>
                </div>
                <div className="business">
                    <h1>Doanh nghiệp đồng hành</h1>
                </div>
                <div className="footer_slider">
                    <Slider {...settings}>
                        <div>
                            <img src={img_business1} alt="Doanh nghiệp 1" />
                        </div>
                        <div>
                            <img src={img_business2} alt="Doanh nghiệp 2" />
                        </div>
                        <div>
                            <img src={img_business3} alt="Doanh nghiệp 3" />
                        </div>
                        <div>
                            <img src={img_business4} alt="Doanh nghiệp 4" />
                        </div>
                        <div>
                            <img src={img_business5} alt="Doanh nghiệp 5" />
                        </div>
                        <div>
                            <img src={img_business1} alt="Doanh nghiệp 1" />
                        </div>
                        <div>
                            <img src={img_business2} alt="Doanh nghiệp 2" />
                        </div>
                        <div>
                            <img src={img_business3} alt="Doanh nghiệp 3" />
                        </div>
                        <div>
                            <img src={img_business4} alt="Doanh nghiệp 4" />
                        </div>
                        <div>
                            <img src={img_business5} alt="Doanh nghiệp 5" />
                        </div>
                    </Slider>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SidebarLayout;
