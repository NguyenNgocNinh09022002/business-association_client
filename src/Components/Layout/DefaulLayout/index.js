import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './DefaultLayout.scss';
import banner1 from '../../../asset/image/slider/banner1.png';
import banner2 from '../../../asset/image/slider/banner2.png';
import banner3 from '../../../asset/image/slider/banner3.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import APIs from '../../../APIs';

function DefaulLayout({ children }) {
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

    const [partnersData, setPartnersData] = useState([]);

    useEffect(() => {
        APIs.getPartners().then((data) => setPartnersData(data));
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                {children}
                <div className="container">
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
                        <h1>Thành viên</h1>
                    </div>
                    <div className="footer_slider">
                        <Slider {...settings}>
                            {partnersData.map((item) => (
                                <div>
                                    <img src={item.logo} alt={item.name} style={{margin:'auto'}} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaulLayout;
