import './Contact.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';
import { CgMail } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';

function Contact() {
    return (
        <div className="container">
            <div className="contact">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/">Trang chủ</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>Liên hệ</p>
                    </div>
                </div>
                <div className="contact__header">
                    <h1>Liên hệ</h1>
                </div>
                <div className="contact__content">
                    <div className="row">
                        <div className="col l-6 m-12 c-12">
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7090673252774!2d106.67292341088839!3d10.985318389131287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d175be49beab%3A0x725c57c9373222f4!2zVHJ1bmcgdMOibSBDaHV54buDbiDEkeG7lWkgc-G7kSB04buJbmggQsOsbmggRMawxqFuZw!5e0!3m2!1svi!2s!4v1720621717555!5m2!1svi!2s"
                                    // width="562"
                                    // height="452"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="Contact__footer">
                                <div className="Contact__footer_header">
                                    <p>
                                        HIỆP HỘI DOANH NGHIỆP
                                        <br /> TỈNH BÌNH DƯƠNG
                                    </p>
                                </div>
                                <div className="Contact__footer_content">
                                    <div className="Contact__footer_item">
                                        <ul>
                                            <li>
                                                <CiLocationOn className="Contact__footer_content_icon" />
                                            </li>
                                            <li>Trung tâm chuyển đổi số tỉnh Bình Dương</li>
                                        </ul>
                                    </div>
                                    <div className="Contact__footer_item">
                                        <ul>
                                            <li>
                                                <FiPhone className="Contact__footer_content_icon" />
                                            </li>
                                            <li> (028) 3915 2459</li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <FiPhone className="Contact__footer_content_icon" />
                                            </li>
                                            <li> (028) 3915 2472</li>
                                        </ul>
                                    </div>
                                    <div className="Contact__footer_item">
                                        <ul>
                                            <li>
                                                <CgMail className="Contact__footer_content_icon" />
                                            </li>
                                            <li>vanphong@huba.vn</li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <CgMail className="Contact__footer_content_icon" />
                                            </li>
                                            <li>tdmu@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-6 m-12 c-12">
                            <form  action='http://localhost:4000/contacts' method='POST'  className="information">
                                <div className="row">
                                    <div className="col l-6 m-6 c-12 ">
                                        <div className="infomation__title">
                                            <p>Họ và tên</p>
                                        </div>
                                        <input  name='userName' type="text" placeholder="Nhập nội dung ... " />
                                    </div>
                                    <div className="col l-6 m-6 c-12">
                                        <div className="infomation__title">
                                            <p>Tên công ty</p>
                                        </div>
                                        <input name='companyName' type="text" placeholder="Nhập nội dung ... " />
                                    </div>
                                    <div className="col l-6 m-6 c-12">
                                        <div className="infomation__title">
                                            <p>Số điện thoại</p>
                                        </div>
                                        <input name='phone' type="text" placeholder="Nhập nội dung ... " />
                                    </div>
                                    <div className="col l-6 m-6 c-12">
                                        <div className="infomation__title">
                                            <p>Địa chỉ</p>
                                        </div>
                                        <input name='address' type="text" placeholder="Nhập nội dung ... " />
                                    </div>
                                    <div className="col l-6 m-6 c-12">
                                        <div className="infomation__title">
                                            <p>Email</p>
                                        </div>
                                        <input name='email' type="text" placeholder="Nhập nội dung ... " />
                                    </div>
                                    <div className="col l-6 m-6 c-12">
                                        <div className="infomation__title">
                                            <p>Tiêu đề</p>
                                        </div>
                                        <input name='title' type="text" placeholder="Nhập nội dung ... " />
                                    </div>
                                    <div className="col l-12 m-12 c-12">
                                        <div className="infomation__title">
                                            <p>Nội dung</p>
                                        </div>
                                        <textarea
                                            id="message"
                                            name="content"
                                            rows="4"
                                            cols="50"
                                            placeholder="Nhập nội dung..."
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="button-submit">
                                        Gửi yêu cầu
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
